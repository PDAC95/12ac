"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}
	return context;
};

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState('en');
	const [isInitialized, setIsInitialized] = useState(false);

	// Detectar idioma del navegador al montar
	useEffect(() => {
		// Intentar obtener idioma guardado en localStorage
		const savedLanguage = localStorage.getItem('preferredLanguage');

		if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
			setLanguage(savedLanguage);
		} else {
			// Detectar idioma del navegador
			const browserLanguage = navigator.language || navigator.userLanguage;
			const detectedLanguage = browserLanguage.toLowerCase().startsWith('es') ? 'es' : 'en';
			setLanguage(detectedLanguage);
			localStorage.setItem('preferredLanguage', detectedLanguage);
		}

		setIsInitialized(true);
	}, []);

	const changeLanguage = (newLanguage) => {
		if (newLanguage !== 'en' && newLanguage !== 'es') {
			console.error('Invalid language. Only "en" and "es" are supported.');
			return;
		}

		setLanguage(newLanguage);
		localStorage.setItem('preferredLanguage', newLanguage);
	};

	const value = {
		language,
		changeLanguage,
		isInitialized,
		t: (key) => translations[language]?.[key] || key,
	};

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
};

// Diccionario de traducciones
const translations = {
	en: {
		// Language Selector
		'welcome': 'Welcome to',
		'chooseLanguage': 'Choose your language to get started',
		'continue': 'Continue',
		'exploreInnovative': 'Explore innovative technology solutions',
		'exploreInnovativeES': 'Explora soluciones tecnológicas innovadoras',

		// Header
		'home': 'Home',
		'aboutUs': 'About Us',
		'services': 'Services',
		'howWeWork': 'How We Work',
		'blog': 'Blog',
		'contact': 'Contact',
		'login': 'Login',

		// Hero
		'shapingYour': 'Shaping Your',
		'vision': 'Vision',
		'withTechnology': 'with Technology',
		'heroDescription': 'We empower businesses through custom software solutions that drive efficiency, innovation, and growth. Combining creativity and technical expertise to keep our clients ahead in the ever-evolving digital landscape.',
		'hitPlay': 'Hit play — let us show you how we work',
		'howWeWorkBtn': 'How We Work',

		// Services
		'customSoftware': 'Custom Software & Apps',
		'customSoftwareDesc': 'We build web platforms, mobile apps, and enterprise software tailored to your business needs. From concept to deployment, we create scalable solutions that grow with you.',
		'aiSolutions': 'AI Solutions & Automation',
		'aiSolutionsDesc': 'We integrate intelligent features that work smarter for you. From chatbots to predictive analytics, we help you automate processes and enhance user experiences with cutting-edge AI.',
		'digitalMarketing': 'Digital Marketing & Branding',
		'digitalMarketingDesc': 'We amplify your brand and drive results. SEO, social media, content strategy, and paid ads—we create data-driven campaigns that turn visibility into growth.',
		'dedicatedTeams': 'Dedicated Teams',
		'dedicatedTeamsDesc': 'Need to scale fast? We provide expert developers, designers, and project managers who integrate seamlessly into your workflow. Hire by the month, project, or sprint.',

		// Footer
		'copyright': '© 2024 AC95 · Technology Solutions',
		'letsBuild': "Let's build",
		'somethingTogether': 'something together',
		'gotProject': "Got a project in mind? We're all ears. Drop us a line and let's figure out how to make it happen.",
		'giveUsCall': 'Give us a call:',
		'sendEmail': 'Send us an email:',
		'sendMessage': 'Send us a message',

		// Video Modal
		'loadingVideo': 'Loading video...',
	},
	es: {
		// Language Selector
		'welcome': 'Bienvenido a',
		'chooseLanguage': 'Elige tu idioma para comenzar',
		'continue': 'Continuar',
		'exploreInnovative': 'Explora soluciones tecnológicas innovadoras',
		'exploreInnovativeES': 'Explora soluciones tecnológicas innovadoras',

		// Header
		'home': 'Inicio',
		'aboutUs': 'Nosotros',
		'services': 'Servicios',
		'howWeWork': 'Cómo Trabajamos',
		'blog': 'Blog',
		'contact': 'Contacto',
		'login': 'Acceder',

		// Hero
		'shapingYour': 'Moldeando Tu',
		'vision': 'Visión',
		'withTechnology': 'con Tecnología',
		'heroDescription': 'Potenciamos empresas a través de soluciones de software personalizadas que impulsan eficiencia, innovación y crecimiento. Combinando creatividad y experiencia técnica para mantener a nuestros clientes a la vanguardia en el cambiante panorama digital.',
		'hitPlay': 'Dale play — déjanos mostrarte cómo trabajamos',
		'howWeWorkBtn': 'Cómo Trabajamos',

		// Services
		'customSoftware': 'Software y Apps Personalizadas',
		'customSoftwareDesc': 'Desarrollamos plataformas web, aplicaciones móviles y software empresarial adaptado a las necesidades de tu negocio. Desde el concepto hasta la implementación, creamos soluciones escalables que crecen contigo.',
		'aiSolutions': 'Soluciones de IA y Automatización',
		'aiSolutionsDesc': 'Integramos funciones inteligentes que trabajan de forma más inteligente para ti. Desde chatbots hasta análisis predictivos, ayudamos a automatizar procesos y mejorar las experiencias de usuario con IA de vanguardia.',
		'digitalMarketing': 'Marketing Digital y Branding',
		'digitalMarketingDesc': 'Amplificamos tu marca e impulsamos resultados. SEO, redes sociales, estrategia de contenido y anuncios pagados: creamos campañas basadas en datos que convierten la visibilidad en crecimiento.',
		'dedicatedTeams': 'Equipos Dedicados',
		'dedicatedTeamsDesc': '¿Necesitas escalar rápido? Proporcionamos desarrolladores, diseñadores y gerentes de proyecto expertos que se integran perfectamente en tu flujo de trabajo. Contrata por mes, proyecto o sprint.',

		// Footer
		'copyright': '© 2024 AC95 · Soluciones Tecnológicas',
		'letsBuild': 'Construyamos',
		'somethingTogether': 'algo juntos',
		'gotProject': '¿Tienes un proyecto en mente? Estamos listos para escuchar. Escríbenos y descubramos cómo hacerlo realidad.',
		'giveUsCall': 'Llámanos:',
		'sendEmail': 'Envíanos un email:',
		'sendMessage': 'Envíanos un mensaje',

		// Video Modal
		'loadingVideo': 'Cargando video...',
	},
};