import './App.css';
import seth from './seth.JPG'

function AboutMe() {
    return (<>
        <div className='about'>
            <h1>ABOUT ME</h1>

            <div className='horizontal'>
                <img src={seth} alt="headshot" height={350} width={230}></img>
                <div className='vertical'>
                    <h1>SETH LANDON LEWIS</h1>
                    <h3>SOFTWARE DEVELOPER</h3>
                    <p className='bio'>My name is Seth Lewis. I am an entry level software developer fresh out
                        of Nashville Software School. There, I learned JavaScript, React JS, C#,
                        and .NET, as well as several other technologies and programming concepts.
                        My first programming experience was at age 9 with a platform called Scratch.
                        There, I made several small games and animations. After several years with
                        Scratch, I decided to change things up and take on web development. Since then,
                        I have built many projects, web apps, and web APIs. I learned many things about
                        development that I would love to apply on the job, whether it be client side, server side,
                        or both!
                    </p>
                    <h3>MAIN TECH STACK:</h3>
                    <div className='techstack'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" height="65" width="65" />
                        <img src="https://i.pinimg.com/originals/eb/7e/20/eb7e20e646f5b7ec9ed4f8f78a5dee8f.png" height="65" width="45" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/726px-Javascript-shield.svg.png" height="65" width="50" />
                        <img src="https://camo.githubusercontent.com/d7a64b8b7601f8e4d424e87cdb88eb8564a9bce3955cfed3e8dffef4115465af/68747470733a2f2f63646e2e66726565626965737570706c792e636f6d2f6c6f676f732f6c617267652f32782f72656163742d312d6c6f676f2d706e672d7472616e73706172656e742e706e67" height="55" width="55" />
                        <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/csharp_original_logo_icon_146578.png" height="55" width="55" />
                        <img src="https://cdn.iconscout.com/icon/free/png-256/microsoft-dot-net-1175176.png" height="65" width="45" />
                        <img src="https://img.favpng.com/22/9/5/portable-network-graphics-clip-art-database-computer-icons-transparency-png-favpng-T0F5WvejdgKM4LjvP5iYP6N6p.jpg" height="55" width="55" />
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" height="50" width="50" />
                        <img src="https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png" height="50" width="50" />
                        <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" height="50" width="50" />
                    </div>
                    <br></br>
                    <h4>TECH STACKS I'M LEARNING:</h4>
                    <div className='techstack'>
                        <img src="https://cdn.iconscout.com/icon/free/png-256/vuejs-1175052.png" height="60" width="60" />
                        <img src="https://image.similarpng.com/very-thumbnail/2021/12/Python-programming-logo-on-transparent-background-PNG.png" height="60" width="60" />
                    </div>
                </div>
            </div>

        </div>
    </>
    );
}

export default AboutMe;
