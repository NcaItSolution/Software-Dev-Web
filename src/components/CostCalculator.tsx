import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, Zap, Globe, Smartphone, Database } from 'lucide-react';

interface CalculatorState {
  projectType: string;
  features: string[];
  timeline: string;
  complexity: string;
  // pages: number; (removed)
  integrations: string[];
  maintenance: boolean;
}

const CostCalculator: React.FC = () => {
  const [formData, setFormData] = useState<CalculatorState>({
    projectType: '',
    features: [],
    timeline: '',
    complexity: '',
  // pages: 5, (removed)
    integrations: [],
    maintenance: false
  });

  const [totalCost, setTotalCost] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Higher INR prices
  const projectTypes = [
    { id: 'landing', name: 'Landing Page', price: 3999, icon: <Globe className="w-5 h-5" /> },
    { id: 'business', name: 'Business Website', price: 6999, icon: <Globe className="w-5 h-5" /> },
    { id: 'ecommerce', name: 'E-commerce Store', price: 11999, icon: <DollarSign className="w-5 h-5" /> },
    { id: 'webapp', name: 'Web Application', price: 15999, icon: <Zap className="w-5 h-5" /> },
    { id: 'mobile', name: 'Mobile App', price: 19999, icon: <Smartphone className="w-5 h-5" /> },
    { id: 'custom', name: 'Custom Software', price: 24999, icon: <Database className="w-5 h-5" /> }
  ];

  // Higher INR prices
  const features = [
    { id: 'cms', name: 'Content Management System', price: 1999 },
    { id: 'auth', name: 'User Authentication', price: 1499 },
    { id: 'payment', name: 'Payment Gateway', price: 2499 },
    { id: 'analytics', name: 'Analytics Dashboard', price: 1799 },
    { id: 'api', name: 'API Integration', price: 1299 },
    { id: 'seo', name: 'SEO Optimization', price: 999 },
    { id: 'multilang', name: 'Multi-language Support', price: 1499 },
    { id: 'chat', name: 'Live Chat Support', price: 799 }
  ];

  const complexityMultipliers = [
    { id: 'simple', name: 'Simple', multiplier: 1, description: 'Basic functionality' },
    { id: 'moderate', name: 'Moderate', multiplier: 1.3, description: 'Standard features' },
    { id: 'complex', name: 'Complex', multiplier: 1.6, description: 'Advanced functionality' },
    { id: 'enterprise', name: 'Enterprise', multiplier: 2, description: 'Full-scale solution' }
  ];

  const timelineMultipliers = [
    { id: 'standard', name: '3-6 months', multiplier: 1, description: 'Standard timeline' },
    { id: 'fast', name: '1-3 months', multiplier: 1.4, description: 'Fast delivery' },
    { id: 'rush', name: 'Under 1 month', multiplier: 1.8, description: 'Rush delivery' }
  ];

  // Higher INR prices
  const integrations = [
    { id: 'crm', name: 'CRM Integration', price: 1499 },
    { id: 'erp', name: 'ERP System', price: 2999 },
    { id: 'social', name: 'Social Media APIs', price: 999 },
    { id: 'email', name: 'Email Marketing', price: 1199 },
    { id: 'cloud', name: 'Cloud Storage', price: 1499 }
  ];

  useEffect(() => {
    calculateCost();
  }, [formData]);

  const calculateCost = () => {
    let baseCost = 0;
    
    // Base project cost
    const selectedProject = projectTypes.find(p => p.id === formData.projectType);
    if (selectedProject) {
      baseCost = selectedProject.price;
    }

    // Add feature costs
    const featureCost = formData.features.reduce((total, featureId) => {
      const feature = features.find(f => f.id === featureId);
      return total + (feature?.price || 0);
    }, 0);

    // Add integration costs
    const integrationCost = formData.integrations.reduce((total, integrationId) => {
      const integration = integrations.find(i => i.id === integrationId);
      return total + (integration?.price || 0);
    }, 0);


    // Apply complexity multiplier
    const complexityMultiplier = complexityMultipliers.find(c => c.id === formData.complexity)?.multiplier || 1;

    // Apply timeline multiplier
    const timelineMultiplier = timelineMultipliers.find(t => t.id === formData.timeline)?.multiplier || 1;

    // Calculate subtotal
  let subtotal = (baseCost + featureCost + integrationCost) * complexityMultiplier * timelineMultiplier;

    // Add maintenance cost (annual)
    if (formData.maintenance) {
      subtotal += subtotal * 0.2; // 20% for first year maintenance
    }

    setTotalCost(Math.round(subtotal));
  setShowResult(subtotal > 0 && formData.projectType !== '');
  };

  const handleProjectTypeChange = (projectId: string) => {
    setFormData(prev => ({ ...prev, projectType: projectId }));
  };

  const handleFeatureToggle = (featureId: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(f => f !== featureId)
        : [...prev.features, featureId]
    }));
  };

  const handleIntegrationToggle = (integrationId: string) => {
    setFormData(prev => ({
      ...prev,
      integrations: prev.integrations.includes(integrationId)
        ? prev.integrations.filter(i => i !== integrationId)
        : [...prev.integrations, integrationId]
    }));
  };

  // Download quote as text file
  const handleDownloadQuote = () => {
    const selectedProject = projectTypes.find(p => p.id === formData.projectType)?.name || '';
    const selectedFeatures = formData.features.map(fid => features.find(f => f.id === fid)?.name).filter(Boolean).join(', ');
    const selectedIntegrations = formData.integrations.map(iid => integrations.find(i => i.id === iid)?.name).filter(Boolean).join(', ');
    const complexity = complexityMultipliers.find(c => c.id === formData.complexity)?.name || '';
    const timeline = timelineMultipliers.find(t => t.id === formData.timeline)?.name || '';
    const quote = `--- Project Quote ---\n\nProject Type: ${selectedProject}\nFeatures: ${selectedFeatures || 'None'}\nIntegrations: ${selectedIntegrations || 'None'}\nComplexity: ${complexity}\nTimeline: ${timeline}\nMaintenance: ${formData.maintenance ? 'Yes' : 'No'}\n\nEstimated Total: ₹${totalCost.toLocaleString()}\n`;
    const blob = new Blob([quote], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'project-quote.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  // No custom slider style needed for simple version
  return (
    <section id="calculator" className="relative z-10 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-cyan-400">Simple Cost Calculator</h2>
          <p className="text-lg text-gray-400">Estimate your project cost in Indian Rupees. Download your quote instantly!</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            {/* Project Type */}
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Project Type</h3>
              <div className="grid grid-cols-1 gap-2">
                {projectTypes.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => handleProjectTypeChange(project.id)}
                    className={`p-3 rounded-lg border text-left ${formData.projectType === project.id ? 'border-cyan-500 bg-cyan-500/10' : 'border-gray-600 hover:border-cyan-400'}`}
                  >
                    <span className="font-medium">{project.name}</span>
                    <span className="float-right text-cyan-400 font-bold">₹{project.price.toLocaleString()}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Features</h3>
              <div className="flex flex-col gap-2">
                {features.map((feature) => (
                  <label key={feature.id} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.features.includes(feature.id)}
                      onChange={() => handleFeatureToggle(feature.id)}
                      className="mr-2"
                    />
                    <span className="flex-1">{feature.name}</span>
                    <span className="text-cyan-400 font-bold">+₹{feature.price.toLocaleString()}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Complexity & Timeline */}
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Complexity</h3>
              <div className="flex flex-col gap-2">
                {complexityMultipliers.map((complexity) => (
                  <label key={complexity.id} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="complexity"
                      value={complexity.id}
                      checked={formData.complexity === complexity.id}
                      onChange={(e) => setFormData(prev => ({ ...prev, complexity: e.target.value }))}
                      className="mr-2"
                    />
                    <span>{complexity.name}</span>
                  </label>
                ))}
              </div>
            </div>
            {/* <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Timeline</h3>
              <div className="flex flex-col gap-2">
                {timelineMultipliers.map((timeline) => (
                  <label key={timeline.id} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="timeline"
                      value={timeline.id}
                      checked={formData.timeline === timeline.id}
                      onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                      className="mr-2"
                    />
                    <span>{timeline.name}</span>
                  </label>
                ))}
              </div>
            </div> */}

            {/* Integrations */}
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Integrations</h3>
              <div className="flex flex-col gap-2">
                {integrations.map((integration) => (
                  <label key={integration.id} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.integrations.includes(integration.id)}
                      onChange={() => handleIntegrationToggle(integration.id)}
                      className="mr-2"
                    />
                    <span className="flex-1">{integration.name}</span>
                    <span className="text-cyan-400 font-bold">+₹{integration.price.toLocaleString()}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Maintenance */}
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6">
              <label className="flex items-center cursor-pointer max-w-full">
                <input
                  type="checkbox"
                  checked={formData.maintenance}
                  onChange={(e) => setFormData(prev => ({ ...prev, maintenance: e.target.checked }))}
                  className="mr-2"
                />
                <span>Include First Year Maintenance (+20%)</span>
              </label>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 mt-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-green-400" />
                Project Estimate
              </h3>
              {showResult ? (
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-cyan-400">₹{totalCost.toLocaleString()}</div>
                  <div className="text-gray-400">Estimated Total Cost</div>
                  <button
                    className="w-full bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 px-4 py-3 rounded-lg font-bold text-lg mt-2"
                    onClick={handleDownloadQuote}
                  >
                    Download Quote
                  </button>
                  <div className="text-center text-xs text-gray-400 mt-2">
                    * This is an estimate. Final pricing may vary based on specific requirements.
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calculator className="w-12 h-12 text-gray-600 mx-auto mb-2" />
                  <div className="text-gray-400">Select a project type to see your estimate</div>
                </div>
              )}
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default CostCalculator;