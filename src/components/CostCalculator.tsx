import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, CheckCircle, ArrowRight, Zap, Globe, Smartphone, Database } from 'lucide-react';

interface CalculatorState {
  projectType: string;
  features: string[];
  timeline: string;
  complexity: string;
  pages: number;
  integrations: string[];
  maintenance: boolean;
}

const CostCalculator: React.FC = () => {
  const [formData, setFormData] = useState<CalculatorState>({
    projectType: '',
    features: [],
    timeline: '',
    complexity: '',
    pages: 5,
    integrations: [],
    maintenance: false
  });

  const [totalCost, setTotalCost] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const projectTypes = [
    { id: 'landing', name: 'Landing Page', price: 2500, icon: <Globe className="w-5 h-5" /> },
    { id: 'business', name: 'Business Website', price: 5000, icon: <Globe className="w-5 h-5" /> },
    { id: 'ecommerce', name: 'E-commerce Store', price: 8000, icon: <DollarSign className="w-5 h-5" /> },
    { id: 'webapp', name: 'Web Application', price: 12000, icon: <Zap className="w-5 h-5" /> },
    { id: 'mobile', name: 'Mobile App', price: 15000, icon: <Smartphone className="w-5 h-5" /> },
    { id: 'custom', name: 'Custom Software', price: 20000, icon: <Database className="w-5 h-5" /> }
  ];

  const features = [
    { id: 'cms', name: 'Content Management System', price: 1500 },
    { id: 'auth', name: 'User Authentication', price: 1200 },
    { id: 'payment', name: 'Payment Gateway', price: 2000 },
    { id: 'analytics', name: 'Analytics Dashboard', price: 1800 },
    { id: 'api', name: 'API Integration', price: 1000 },
    { id: 'seo', name: 'SEO Optimization', price: 800 },
    { id: 'multilang', name: 'Multi-language Support', price: 1500 },
    { id: 'chat', name: 'Live Chat Support', price: 600 }
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

  const integrations = [
    { id: 'crm', name: 'CRM Integration', price: 1200 },
    { id: 'erp', name: 'ERP System', price: 2500 },
    { id: 'social', name: 'Social Media APIs', price: 600 },
    { id: 'email', name: 'Email Marketing', price: 800 },
    { id: 'cloud', name: 'Cloud Storage', price: 1000 }
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

    // Add page cost (beyond base 5 pages)
    const pageCost = Math.max(0, formData.pages - 5) * 200;

    // Apply complexity multiplier
    const complexityMultiplier = complexityMultipliers.find(c => c.id === formData.complexity)?.multiplier || 1;

    // Apply timeline multiplier
    const timelineMultiplier = timelineMultipliers.find(t => t.id === formData.timeline)?.multiplier || 1;

    // Calculate subtotal
    let subtotal = (baseCost + featureCost + integrationCost + pageCost) * complexityMultiplier * timelineMultiplier;

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

  return (
    <section id="calculator" className="relative z-10 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full text-emerald-400 font-semibold text-sm tracking-wide uppercase mb-6">
            💰 Project Estimator
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Cost Calculator
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Get an instant estimate for your project. Our transparent pricing helps you plan your budget effectively.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Type */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Calculator className="w-6 h-6 mr-3 text-cyan-400" />
                Project Type
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {projectTypes.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => handleProjectTypeChange(project.id)}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left group ${
                      formData.projectType === project.id
                        ? 'border-cyan-500 bg-cyan-500/10'
                        : 'border-gray-600 hover:border-gray-500 hover:bg-gray-700/30'
                    }`}
                  >
                    <div className="flex items-center mb-3">
                      <div className={`p-2 rounded-lg mr-3 ${
                        formData.projectType === project.id ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300'
                      }`}>
                        {project.icon}
                      </div>
                      <span className="font-semibold text-lg">{project.name}</span>
                    </div>
                    <div className="text-2xl font-bold text-cyan-400">
                      ${project.price.toLocaleString()}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Additional Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <label
                    key={feature.id}
                    className="flex items-center p-4 rounded-xl border border-gray-600 hover:border-gray-500 cursor-pointer transition-all duration-300 group"
                  >
                    <input
                      type="checkbox"
                      checked={formData.features.includes(feature.id)}
                      onChange={() => handleFeatureToggle(feature.id)}
                      className="sr-only"
                    />
                    <div className={`w-6 h-6 rounded-lg border-2 mr-4 flex items-center justify-center transition-all duration-300 ${
                      formData.features.includes(feature.id)
                        ? 'bg-cyan-500 border-cyan-500'
                        : 'border-gray-500 group-hover:border-gray-400'
                    }`}>
                      {formData.features.includes(feature.id) && (
                        <CheckCircle className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{feature.name}</div>
                      <div className="text-cyan-400 font-bold">+${feature.price.toLocaleString()}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Complexity & Timeline */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Complexity Level</h3>
                <div className="space-y-3">
                  {complexityMultipliers.map((complexity) => (
                    <label
                      key={complexity.id}
                      className="flex items-center p-4 rounded-xl border border-gray-600 hover:border-gray-500 cursor-pointer transition-all duration-300"
                    >
                      <input
                        type="radio"
                        name="complexity"
                        value={complexity.id}
                        checked={formData.complexity === complexity.id}
                        onChange={(e) => setFormData(prev => ({ ...prev, complexity: e.target.value }))}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded-full border-2 mr-4 ${
                        formData.complexity === complexity.id
                          ? 'bg-cyan-500 border-cyan-500'
                          : 'border-gray-500'
                      }`}>
                        {formData.complexity === complexity.id && (
                          <div className="w-2 h-2 bg-white rounded-full mx-auto mt-1"></div>
                        )}
                      </div>
                      <div>
                        <div className="font-semibold">{complexity.name}</div>
                        <div className="text-sm text-gray-400">{complexity.description}</div>
                        <div className="text-cyan-400 font-bold">×{complexity.multiplier}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Timeline</h3>
                <div className="space-y-3">
                  {timelineMultipliers.map((timeline) => (
                    <label
                      key={timeline.id}
                      className="flex items-center p-4 rounded-xl border border-gray-600 hover:border-gray-500 cursor-pointer transition-all duration-300"
                    >
                      <input
                        type="radio"
                        name="timeline"
                        value={timeline.id}
                        checked={formData.timeline === timeline.id}
                        onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded-full border-2 mr-4 ${
                        formData.timeline === timeline.id
                          ? 'bg-cyan-500 border-cyan-500'
                          : 'border-gray-500'
                      }`}>
                        {formData.timeline === timeline.id && (
                          <div className="w-2 h-2 bg-white rounded-full mx-auto mt-1"></div>
                        )}
                      </div>
                      <div>
                        <div className="font-semibold">{timeline.name}</div>
                        <div className="text-sm text-gray-400">{timeline.description}</div>
                        <div className="text-cyan-400 font-bold">×{timeline.multiplier}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Pages & Integrations */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Number of Pages</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Pages (5 included)</span>
                    <span className="text-cyan-400 font-bold">{formData.pages}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={formData.pages}
                    onChange={(e) => setFormData(prev => ({ ...prev, pages: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="text-sm text-gray-400">
                    Additional pages: +${Math.max(0, formData.pages - 5) * 200}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Integrations</h3>
                <div className="space-y-3">
                  {integrations.map((integration) => (
                    <label
                      key={integration.id}
                      className="flex items-center p-3 rounded-xl border border-gray-600 hover:border-gray-500 cursor-pointer transition-all duration-300 group"
                    >
                      <input
                        type="checkbox"
                        checked={formData.integrations.includes(integration.id)}
                        onChange={() => handleIntegrationToggle(integration.id)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center transition-all duration-300 ${
                        formData.integrations.includes(integration.id)
                          ? 'bg-cyan-500 border-cyan-500'
                          : 'border-gray-500 group-hover:border-gray-400'
                      }`}>
                        {formData.integrations.includes(integration.id) && (
                          <CheckCircle className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <div className="flex-1 flex justify-between items-center">
                        <span className="font-medium">{integration.name}</span>
                        <span className="text-cyan-400 font-bold">+${integration.price.toLocaleString()}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Maintenance */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.maintenance}
                  onChange={(e) => setFormData(prev => ({ ...prev, maintenance: e.target.checked }))}
                  className="sr-only"
                />
                <div className={`w-6 h-6 rounded-lg border-2 mr-4 flex items-center justify-center transition-all duration-300 ${
                  formData.maintenance
                    ? 'bg-cyan-500 border-cyan-500'
                    : 'border-gray-500'
                }`}>
                  {formData.maintenance && (
                    <CheckCircle className="w-4 h-4 text-white" />
                  )}
                </div>
                <div>
                  <div className="text-xl font-bold">Include First Year Maintenance</div>
                  <div className="text-gray-400">Ongoing support, updates, and security patches</div>
                  <div className="text-cyan-400 font-bold">+20% of project cost</div>
                </div>
              </label>
            </div>
          </div>

          {/* Cost Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <DollarSign className="w-6 h-6 mr-3 text-green-400" />
                  Project Estimate
                </h3>

                {showResult ? (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-5xl font-black mb-2 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                        ${totalCost.toLocaleString()}
                      </div>
                      <div className="text-gray-400">Estimated Total Cost</div>
                    </div>

                    <div className="space-y-3 border-t border-gray-700 pt-6">
                      <div className="flex justify-between">
                        <span>Base Project</span>
                        <span>${projectTypes.find(p => p.id === formData.projectType)?.price.toLocaleString()}</span>
                      </div>
                      
                      {formData.features.length > 0 && (
                        <div className="flex justify-between">
                          <span>Features ({formData.features.length})</span>
                          <span>+${formData.features.reduce((total, featureId) => {
                            const feature = features.find(f => f.id === featureId);
                            return total + (feature?.price || 0);
                          }, 0).toLocaleString()}</span>
                        </div>
                      )}

                      {formData.integrations.length > 0 && (
                        <div className="flex justify-between">
                          <span>Integrations ({formData.integrations.length})</span>
                          <span>+${formData.integrations.reduce((total, integrationId) => {
                            const integration = integrations.find(i => i.id === integrationId);
                            return total + (integration?.price || 0);
                          }, 0).toLocaleString()}</span>
                        </div>
                      )}

                      {formData.pages > 5 && (
                        <div className="flex justify-between">
                          <span>Extra Pages ({formData.pages - 5})</span>
                          <span>+${((formData.pages - 5) * 200).toLocaleString()}</span>
                        </div>
                      )}

                      {formData.complexity && (
                        <div className="flex justify-between">
                          <span>Complexity</span>
                          <span>×{complexityMultipliers.find(c => c.id === formData.complexity)?.multiplier}</span>
                        </div>
                      )}

                      {formData.timeline && (
                        <div className="flex justify-between">
                          <span>Timeline</span>
                          <span>×{timelineMultipliers.find(t => t.id === formData.timeline)?.multiplier}</span>
                        </div>
                      )}

                      {formData.maintenance && (
                        <div className="flex justify-between">
                          <span>First Year Maintenance</span>
                          <span>+20%</span>
                        </div>
                      )}
                    </div>

                    <button className="w-full bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 px-6 py-4 rounded-xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 group">
                      <span className="flex items-center justify-center">
                        Get Detailed Quote
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </button>

                    <div className="text-center text-sm text-gray-400">
                      * This is an estimate. Final pricing may vary based on specific requirements.
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calculator className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <div className="text-gray-400">
                      Select a project type to see your estimate
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #06b6d4;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #06b6d4;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
        }
      `}</style>
    </section>
  );
};

export default CostCalculator;