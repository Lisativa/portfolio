let text = document.getElementById('text');
let mountain_1 = document.getElementById('mountain_1');
let mountain_2 = document.getElementById('mountain_2');
let cloud_1 = document.getElementById('cloud_1');
let cloud_2 = document.getElementById('cloud_2');
let bghills = document.getElementById('bghills');

let nuage_1 = document.getElementById('nuage_1');
let nuage_2 = document.getElementById('nuage_2');
let nuage_3 = document.getElementById('nuage_3');
let moon = document.getElementById('moon');
let star = document.getElementById('star');
let star_1 = document.getElementById('star_1');
let star_2 = document.getElementById('star_2');
let star_3 = document.getElementById('star_3');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    cloud_2.style.top  = value * -0.5 + 'px';
    cloud_2.style.left = value * 0.5 + 'px';
    cloud_1.style.top  = value * -0.5 + 'px';
    cloud_1.style.left = value * -0.5 + 'px';
    mountain_1.style.left = value * -0.5 + 'px';
    mountain_2.style.left = value * 1.5 + 'px';
    bghills.style.top = value * -0.08 + 'px';

    star.style.top  = value * -0.5 + 'px';
    star_1.style.left = value * 0.5 + 'px';
    star_2.style.top  = value * -0.5 + 'px';
    star_2.style.right  = value * -0.5 + 'px';
    star_3.style.left = value * -0.5 + 'px';

});


function App() {
    const [offsetY, setOffsetY] = useState[0];
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
}

const containers = document.querySelectorAll('.container')
window.addEventListener('scroll', checkContainers)
    checkContainers()

    function checkContainers() {
        const trigerBottom = window.innerHeight / 5*4
        containers.forEach(container => {
            const containerTop = container.getBoundingClientRect().top
            if(containerTop < trigerBottom) {
                container.classList.add('show')
            } else {
                container.classList.remove('show')
            }
        })
    }