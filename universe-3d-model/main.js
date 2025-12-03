console.log('🌌 Universe 3D Simulation Application');
console.log('📅 ' + new Date().toLocaleDateString());
console.log('👨‍💻 Developer: Md. Abu Sufian');
console.log('🔧 Technologies: Three.js, WebGL, JavaScript');

const AppInfo = {
    name: 'Universe 3D Imagination',
    version: '1.0',
    description: 'Interactive cosmic scale visualization',
    repository: 'https://github.com/AbuSufianDS/universe-3d-Imagination',
    liveDemo: 'https://abusufiands.github.io/universe-3d-Imagination/'
};

console.group('Application Information');
console.log('Name:', AppInfo.name);
console.log('Version:', AppInfo.version);
console.log('Repository:', AppInfo.repository);
console.log('Live Demo:', AppInfo.liveDemo);
console.groupEnd();

window.addEventListener('load', () => {
    console.log('🚀 Page loaded, initializing application...');
 
    if (typeof THREE === 'undefined') {
        console.warn('Three.js not detected. Please include Three.js library.');
        document.getElementById('loading').innerHTML = `
            <div style="color: orange; text-align: center;">
                <h3>Setup Required</h3>
                <p>Loading Three.js library...</p>
            </div>
        `;
    } else {
        console.log('Three.js detected, version:', THREE.REVISION);
        document.getElementById('loading').innerHTML = `
            <div style="text-align: center;">
                <h3>System Ready</h3>
                <p>3D visualization engine loaded successfully</p>
                <p>Proceed to main interface</p>
            </div>
        `;
    }
});

window.addEventListener('resize', () => {
    console.log(' Window resized:', window.innerWidth, 'x', window.innerHeight);
});

// Add keyboard shortcuts info
console.log(' Controls: Mouse drag = rotate, Scroll = zoom, Q/E = time speed, G/O/R = toggle features');
