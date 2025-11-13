// Video URLs configuration by language
export const videoConfig = {
	en: {
		hero: 'https://res.cloudinary.com/dxri4npkx/video/upload/v1762807998/ac1en_fs9jnb.mp4',
		customSoftware: 'https://res.cloudinary.com/dxri4npkx/video/upload/v1762879038/ac_dev_basqej.mp4',
		aiSolutions: 'https://res.cloudinary.com/dxri4npkx/video/upload/v1762879000/acai_cejjpn.mp4',
		digitalMarketing: 'https://res.cloudinary.com/dxri4npkx/video/upload/v1762879028/acm_kqprlj.mp4',
		dedicatedTeams: 'https://res.cloudinary.com/dxri4npkx/video/upload/v1762879012/acem_gkpqzb.mp4',
	},
	es: {
		hero: 'https://res.cloudinary.com/dxri4npkx/video/upload/v1762879024/ac1_r1pfhb.mp4',
		customSoftware: 'https://res.cloudinary.com/dxri4npkx/video/upload/v1762879038/ac_dev_basqej.mp4',
		aiSolutions: 'https://res.cloudinary.com/dxri4npkx/video/upload/v1762879000/acai_cejjpn.mp4',
		digitalMarketing: 'https://res.cloudinary.com/dxri4npkx/video/upload/v1762879028/acm_kqprlj.mp4',
		dedicatedTeams: 'https://res.cloudinary.com/dxri4npkx/video/upload/v1762879012/acem_gkpqzb.mp4',
	},
};

// Helper function to get video URL by language and type
export const getVideoUrl = (language, videoType) => {
	const validLanguages = ['en', 'es'];
	const validTypes = ['hero', 'customSoftware', 'aiSolutions', 'digitalMarketing', 'dedicatedTeams'];

	// Validate inputs
	if (!validLanguages.includes(language)) {
		console.error(`Invalid language: ${language}. Using default (en)`);
		language = 'en';
	}

	if (!validTypes.includes(videoType)) {
		console.error(`Invalid video type: ${videoType}`);
		return null;
	}

	return videoConfig[language][videoType];
};