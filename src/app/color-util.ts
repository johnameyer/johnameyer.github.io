import GitHubColors from 'github-colors';

const mapping = {
    android: 'Java',
    flask: 'Python',
    bootstrap: 'HTML',
    ionic: 'TypeScript',
    angular: 'TypeScript',
    typescript: 'TypeScript',
    javascript: 'JavaScript',
    mysql: 'SQL',
    opencv: 'OpenCV',
    swing: 'Java',
    nodered: 'JavaScript'
};

export default class ColorUtil {
    private static initialized = false;

    public static init() {
        if (this.initialized) {
            return;
        }
        GitHubColors.init(true);
        this.initialized = true;
    }

    public static getColor(tech: string) {
        tech = mapping[tech.toLowerCase()] || tech;
        return GitHubColors.get(tech, '#333').color;
    }
}
