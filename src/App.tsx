import React, { useState, useEffect } from 'react';
import CostCalculator from './components/CostCalculator';
import { 
  Menu, 
  X, 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Users, 
  Award, 
  TrendingUp, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Clock,
  Target,
  Lightbulb,
  Heart
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const stats = [
    { number: 150, label: 'Projects Completed', suffix: '+', icon: <Code className="w-6 h-6" /> },
    { number: 50, label: 'Happy Clients', suffix: '+', icon: <Users className="w-6 h-6" /> },
    { number: 5, label: 'Years Experience', suffix: '+', icon: <Award className="w-6 h-6" /> },
    { number: 24, label: 'Support Hours', suffix: '/7', icon: <Clock className="w-6 h-6" /> }
  ];

  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your unique business requirements and drive exponential growth.',
      features: ['Enterprise Applications', 'API Development', 'System Integration', 'Legacy Modernization'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications with exceptional UX that users love and businesses trust.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications using cutting-edge technologies and best practices.',
      features: ['React/Next.js', 'Node.js/Express', 'E-commerce', 'Progressive Web Apps'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and DevOps solutions for reliable, secure, and efficient operations.',
      features: ['AWS/Azure/GCP', 'CI/CD Pipelines', 'Microservices', 'Container Orchestration'],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'NCA IT Solution transformed our business with their innovative approach. The quality of work exceeded our expectations.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Michael Chen',
      role: 'Founder, StartupX',
      content: 'Professional, reliable, and incredibly talented team. They delivered our project on time and within budget.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager, InnovateLab',
      content: 'Outstanding technical expertise and communication. They understood our vision and brought it to life perfectly.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const Counter = ({ target, suffix = '', duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }, [target, duration]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Cursor Follower */}
      <div 
        className="fixed w-6 h-6 bg-cyan-400/30 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${scrollY > 100 ? 1.5 : 1})`
        }}
      />

      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
        
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 transform rotate-45 animate-float-delayed"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-r from-orange-500/20 to-red-500/20 transform rotate-12 animate-float-fast"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full animate-pulse-slow"></div>
        </div>

        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      {/* Enhanced Navigation */}
      <nav className="relative z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
              NCA IT SOLUTION
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'Services', 'About', 'Calculator', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            <button 
              className="md:hidden p-2 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50">
            <div className="px-4 py-6 space-y-4">
              {['Home', 'Services', 'About', 'Calculator', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="block px-4 py-3 rounded-lg hover:bg-gray-800/50 hover:text-cyan-400 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-cyan-400 font-semibold text-sm tracking-wide uppercase animate-fade-in">
              ✨ Premium Software Solutions
            </span>
          </div>
          
          <h1 
            className="text-6xl md:text-8xl font-black mb-8 leading-tight animate-fade-in-up"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-400 bg-clip-text text-transparent">
              Transform
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Your Vision
            </span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            We craft exceptional digital experiences that drive innovation, accelerate growth, and transform businesses into industry leaders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center">
                Start Your Project
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            
            <button className="group px-10 py-5 border-2 border-gray-600 hover:border-cyan-500 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:bg-cyan-500/10 backdrop-blur-sm">
              <span className="flex items-center justify-center">
                View Our Work
                <Zap className="w-6 h-6 ml-3 group-hover:text-cyan-400 transition-colors duration-300" />
              </span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm">Secure & Reliable</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm">5-Star Rated</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                    <Counter target={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="relative z-10 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-400 font-semibold text-sm tracking-wide uppercase mb-6">
              Our Expertise
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              Premium Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We deliver cutting-edge solutions that propel your business forward with innovation, precision, and unmatched quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-10 hover:border-transparent transition-all duration-700 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`}></div>
                <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-500">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center group/feature">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-300" />
                        <span className="text-gray-300 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="relative z-10 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Majestic Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-4 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 transition-all duration-500">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                  alt="NCA IT Solution Team" 
                  className="w-full h-[500px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-xl">
                  <Code className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:-rotate-12 transition-transform duration-500 shadow-xl">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Right Side - About Content */}
            <div className="space-y-8">
              <div>
                <span className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full text-cyan-400 font-semibold text-sm tracking-wide uppercase mb-6">
                  About NCA IT Solution
                </span>
                <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                    Pioneering Digital
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Excellence
                  </span>
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                <p>
                  Since 2024, <span className="text-cyan-400 font-semibold">NCA IT Solution</span> has been at the forefront of digital transformation, 
                  crafting innovative software solutions that empower businesses to thrive in the modern digital landscape.
                </p>
                
                <p>
                  Our passionate team of expert developers, designers, and strategists combines cutting-edge technology 
                  with creative problem-solving to deliver solutions that don't just meet expectations—they exceed them. 
                  We believe in the power of technology to transform businesses and create lasting impact.
                </p>
              </div>

              {/* Core Values */}
              <div className="grid md:grid-cols-2 gap-6 mt-12">
                {[
                  {
                    icon: <Target className="w-8 h-8" />,
                    title: 'Mission Driven',
                    description: 'Empowering businesses through innovative technology solutions that drive real results.',
                    gradient: 'from-blue-500 to-cyan-500'
                  },
                  {
                    icon: <Lightbulb className="w-8 h-8" />,
                    title: 'Innovation First',
                    description: 'Embracing cutting-edge technologies and creative approaches to solve complex challenges.',
                    gradient: 'from-purple-500 to-pink-500'
                  },
                  {
                    icon: <Heart className="w-8 h-8" />,
                    title: 'Client Focused',
                    description: 'Building long-term partnerships based on trust, transparency, and exceptional service.',
                    gradient: 'from-green-500 to-teal-500'
                  },
                  {
                    icon: <Award className="w-8 h-8" />,
                    title: 'Excellence Guaranteed',
                    description: 'Delivering premium quality solutions that exceed industry standards and client expectations.',
                    gradient: 'from-orange-500 to-red-500'
                  }
                ].map((value, index) => (
                  <div key={index} className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/10">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${value.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-8">
                <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    Let's Build Something Amazing
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Calculator Section */}
      <CostCalculator />

      {/* Testimonials Section */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur-sm border border-green-500/30 rounded-full text-green-400 font-semibold text-sm tracking-wide uppercase mb-6">
              Client Success
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              What Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-cyan-500/50"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="relative z-10 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full text-orange-400 font-semibold text-sm tracking-wide uppercase mb-6">
              Let's Connect
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              Start Your Journey
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your ideas into reality? Let's discuss how we can elevate your business to new heights.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              {[
                { icon: <Mail className="w-7 h-7" />, title: 'Email Us', info: 'hello@ncaitsolution.com', gradient: 'from-blue-500 to-cyan-500' },
                { icon: <Phone className="w-7 h-7" />, title: 'Call Us', info: '+1 (555) 123-4567', gradient: 'from-green-500 to-teal-500' },
                { icon: <MapPin className="w-7 h-7" />, title: 'Visit Us', info: '123 Innovation Drive, Tech City', gradient: 'from-purple-500 to-pink-500' }
              ].map((contact, index) => (
                <div key={index} className="group flex items-center cursor-pointer">
                  <div className={`p-5 rounded-2xl bg-gradient-to-r ${contact.gradient} mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {contact.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {contact.title}
                    </h3>
                    <p className="text-gray-400 text-lg">{contact.info}</p>
                  </div>
                </div>
              ))}
            </div>

            <form className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-10">
              <div className="space-y-6">
                {[
                  { type: 'text', placeholder: 'Your Name', id: 'name' },
                  { type: 'email', placeholder: 'Your Email', id: 'email' },
                  { type: 'text', placeholder: 'Subject', id: 'subject' }
                ].map((field) => (
                  <div key={field.id} className="group">
                    <input 
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full bg-gray-700/30 border border-gray-600/50 rounded-xl px-6 py-4 text-lg focus:outline-none focus:border-cyan-500 focus:bg-gray-700/50 transition-all duration-300 group-hover:border-gray-500"
                    />
                  </div>
                ))}
                
                <div className="group">
                  <textarea 
                    rows={6} 
                    placeholder="Tell us about your project..."
                    className="w-full bg-gray-700/30 border border-gray-600/50 rounded-xl px-6 py-4 text-lg focus:outline-none focus:border-cyan-500 focus:bg-gray-700/50 transition-all duration-300 resize-none group-hover:border-gray-500"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-5 rounded-xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 group"
                >
                  <span className="flex items-center justify-center">
                    Send Message
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative z-10 bg-gray-900/90 backdrop-blur-xl border-t border-gray-800/50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-4xl font-black mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              NCA IT SOLUTION
            </div>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Transforming businesses through innovative technology solutions since 2019. Your success is our mission.
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              {['LinkedIn', 'Twitter', 'GitHub', 'Dribbble'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-12 h-12 bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <span className="text-sm font-semibold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-gray-800/50 pt-8 text-center">
            <p className="text-gray-500">
              © 2024 NCA IT SOLUTION. All rights reserved. | Crafted with ❤️ for innovation
            </p>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.1); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(90deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
          75% { transform: translateY(-10px) rotate(270deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-blob { animation: blob 7s infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-600 { animation-delay: 0.6s; }
      `}</style>
    </div>
  );
}

export default App;