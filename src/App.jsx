import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.2 }
    )

    const sections = document.querySelectorAll('.scroll-section')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById('experience')
      if (experienceSection) {
        const rect = experienceSection.getBoundingClientRect()
        setShowBackToTop(rect.top <= 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('jaredalyon@gmail.com')
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <div className="app">
      <div className="homepage">
        {/* Profile Picture */}
        <div className="profile-section">
          <div className="profile-picture">
            <img src="/website pic.jpg" alt="Profile" />
          </div>
          <a href="/resume_jared_lyon.pdf" download className="resume-link">
            » click here for my resume! «
          </a>
        </div>

        {/* About Me */}
        <div className="about-section">
          <h1>Hey there!</h1>
          <p>
            My name is Jared Lyon, and I'm currently a master's student at the University of California, Irvine studying Data Science.
            Before this, I completed my undergraduate degree in Computer Science & Biology at Northeastern University in Boston, MA, where I also
            worked as a bioinformatics intern/co-op at the BioMicro Center at the Massachuessetts Institute of Technology.
            <br /><br />
            I'm primarily interested in data engineering/management as well as machine learning/artificial intelligence, and I'm always looking for opportunities to learn and grow in these fields.
            Feel free to check out some of my personal projects on these topics!
            <br /><br />
            Outside of study and work, most people know me as a custom PC builder and filmmaker/producer, although the reality is that I'm more than happy to try anything
            with just about anybody! Check out some of the stuff I've done in these spaces as well, I promise it's not all tech all the time!
          </p>
          
          {/* Social Links */}
          <div className="homepage-links">
            <a href="https://github.com/jaredlyon/" target="_blank" rel="noopener noreferrer" className="homepage-link-card">
              <span className="link-icon">💻</span>
              <span className="link-name">GitHub</span>
            </a>
            
            <a href="https://open.spotify.com/user/kingwaffleshnoz?si=0x8CDdsnSXi9xV0Azt_eXQ" target="_blank" rel="noopener noreferrer" className="homepage-link-card">
              <span className="link-icon">🎵</span>
              <span className="link-name">Spotify</span>
            </a>
            
            <a href="https://www.youtube.com/channel/UCv-6pTz6xyF2fHvyvEnNTbg" target="_blank" rel="noopener noreferrer" className="homepage-link-card">
              <span className="link-icon">📹</span>
              <span className="link-name">YouTube</span>
            </a>
            
            <a href="https://www.flickr.com/photos/186022573@N06/" target="_blank" rel="noopener noreferrer" className="homepage-link-card">
              <span className="link-icon">📷</span>
              <span className="link-name">Flickr</span>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="nav-section">
          <a href="#experience" className="nav-link">» experience</a>
          <a href="#projects" className="nav-link">» projects</a>
          <a href="#publications" className="nav-link">» publications</a>
          <a href="#hobbies" className="nav-link">» hobbies</a>
          <a href="#contact" className="nav-link">» contact me!</a>
        </nav>
      </div>

      {/* Experience Section */}
      <section 
        id="experience" 
        className={`scroll-section content-section ${visibleSections.has('experience') ? 'visible' : ''}`}
      >
        <h2 className="section-title">Experience</h2>
        
        <div className="experience-item">
          <a href="https://github.com/BMCBCC/NExtSEEK" target="_blank" rel="noopener noreferrer" className="item-external-link" aria-label="View details">
            ↗
          </a>
          <h3>Bioinformatics Co-op</h3>
          <p className="position-details">MIT BioMicro Center | Cambridge, MA | January 2024 - June 2024</p>
          <p className="company-description">
            The MIT BioMicro Center is an integrated genomics core facility that provides both expertise and equipment for systems biology, 
            mainly through next generation sequencing and in high throughput screening as well as bioinformatics, BioIT, & data management.
          </p>
          <ul>
            <li>Management of data discovery, standardization, and organization for multiple graduate and postdoc manuscripts primarily concerning systems biology, chemical engineering, & biogenetic engineering</li>
            <li>Analysis for product development of the upcoming releases of the open-source NextSEEK data management software, particularly in the identification of user workflows and toolchains</li>
            <li>Implementation of automated data pipelines for 100,000+ unique samples across 70+ data types for principal investigators within various consortia, including The MIT Superfund Research Program and Hi-IMPAcTB</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Head Teaching Assistant</h3>
          <p className="position-details">Northeastern University | Boston, MA | May 2023 - December 2024</p>
          <ul>
            <li>Head teaching assistant of the (CS 3200) Database Design undergraduate course at Northeastern University for 2 semesters</li>
            <li>Leadership of teams of 9-12 teaching assistants via management of class logistics, hosting of 80-150 weekly office hours, development of grading rubrics, completion of assignment & lab grading, and assistance with 200-300 students' online & in-person coursework questions during each semester</li>
            <li>Assistant teaching of (CS 3500) Object-Oriented Design, (CS 3200) Database Design, and (CS 1200) First-Year Seminar undergraduate courses at Northeastern University for 5 consecutive semesters</li>
          </ul>
        </div>

        <div className="experience-item">
          <a href="https://github.com/Northeastern-Electric-Racing/FinishLine" target="_blank" rel="noopener noreferrer" className="item-external-link" aria-label="View details">
            ↗
          </a>
          <h3>Developer & Product Analyst</h3>
          <p className="position-details">Northeastern Electric Racing | Boston, MA | September 2022 - June 2023</p>
          <ul>
            <li>Development of backend test suites for Prisma ORM to support FinishLine, a customized project management dashboard</li>
            <li>Translation of engineering lead requests into ticket documentation for development team</li>
            <li>Streamlining of ticket management process for product analysis team using Github Projects</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Shift Lead</h3>
          <p className="position-details">Teaspoon Campbell | Campbell, CA | (Seasonal) May 2019 - August 2023</p>
          <ul>
            <li>Leadership of teams of 2-5 baristas through making 500-1200 hand-crafted boba tea drinks per day in a fast-paced environment</li>
            <li>Training of new cashiers and baristas in café procedures, health codes, and customer service needs</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        className={`scroll-section content-section ${visibleSections.has('projects') ? 'visible' : ''}`}
      >
        <h2 className="section-title">Projects</h2>
        
        <div className="project-item">
          <a href="https://github.com/DrNekoSenpai/CS271-Minesweeper/tree/dev" target="_blank" rel="noopener noreferrer" className="item-external-link" aria-label="View project">
            ↗
          </a>
          <h3>Solving 3D Minesweeper via 3D Dueling CNN</h3>
          <p className="project-tech">Group Project | September 2025 - Present</p>
          <ul>
            <li>Development of a 3D Minesweeper AI framework implementing 4 agent strategies (Random, Heuristic, Bayesian, Deep Q-Network) within a custom Gymnasium environment, achieving nontrivial win rates on complex 5×5×5 boards with 5-10 mines</li>
            <li>Engineering of a Dueling Double DQN agent using 3D Convolutional Neural Networks with multi-channel state augmentation and hybrid action selection, improving performance from 0.5% to 50-70% win rate</li>
            <li>Implementation of a learning pipeline pre-training DQN agents on expert Bayesian trajectories (10k+ transitions), accelerating convergence and reducing training time by bootstrapping from high-quality demonstration data</li>
            <li>Optimization of deep RL training performance on GPU (PyTorch), implementing reward normalization to prevent gradient explosion, vectorized parallel environments, and comprehensive metrics tracking for 400k+ training steps</li>
          </ul>
        </div>

        <div className="project-item">
          <span className="item-wip-badge">WIP - Coming Soon!</span>
          <h3><i>League of Legends</i> Wincon Data Pipeline</h3>
          <p className="project-tech">Solo Project | September 2025 - Present</p>
          <ul>
            <li>Implementation of a Python-based data pipeline that automatically retrieves and aggregates complete <i>League of Legends</i> match history, timeline, and statistics JSON files via the public Riot API</li>
            <li>Processing and transformation of over 500,000 unique timeline data points into a flattened, analysis-ready dataset capturing time-dependent player and team metrics</li>
            <li>Application of XGBoost modeling and feature importance analyses to correlate in-game statistics and temporal patterns with match outcomes to determine key performance drivers and generate actionable coaching recommendations to improve win rates</li>
          </ul>
        </div>

        <div className="project-item">
          <a href="https://github.com/jaredlyon/CryptoCompress" target="_blank" rel="noopener noreferrer" className="item-external-link" aria-label="View project">
            ↗
          </a>
          <h3>CryptoCompress</h3>
          <p className="project-tech">Solo Project | December 2023</p>
          <ul>
            <li>Independently engineered a deployable C++ tool for simultaneous lossless compression and encryption of .txt files</li>
            <li>Integration of Google brotli for compression and libsodium for cryptographic operations to ensure efficient, secure data handling</li>
          </ul>
        </div>

        <div className="project-item">
          <a href="https://github.com/jaredlyon/SpoonerInv" target="_blank" rel="noopener noreferrer" className="item-external-link" aria-label="View project">
            ↗
          </a>
          <h3>SpoonerInv</h3>
          <p className="project-tech">Backend Developer | February - April 2023</p>
          <ul>
            <li>Design and implementation of a complete end-to-end data management platform for inventory, ingredient, and order tracking across multiple boba stores organized by region</li>
            <li>Collaboration within a team of 4 undergraduate students over the course of a 10 week development sprint</li>
            <li>Development of a scalable backend database system using MySQL 8 and Python Flask</li>
          </ul>
        </div>

        <div className="project-item">
          <a href="https://github.com/jaredlyon/Operation-Politibot" target="_blank" rel="noopener noreferrer" className="item-external-link" aria-label="View project">
            ↗
          </a>
          <h3>Operation Politics</h3>
          <p className="project-tech">Lead Developer | October 2021 - November 2022</p>
          <p className="project-description">
            The Operation Politics project is a cross-ideological online community of several thousand members hosted on Discord, focused on facilitating respectful, evidence-based discussion surrounding current events. Moderation systems, discussion prompts, and engagement strategies are employed to promote dialogue across political divides and foster common ground with a focus on critical thinking, good-faith debate, and shared understanding in an increasingly polarized digital landscape.
          </p>
          <ul>
            <li>Development, maintenance, documentation, and hosting of automated front end & back end processes</li>
            <li>Automation of community moderation & organization using the Discord Node.js module & Discord.py API wrapper</li>
            <li>Design and implementation of a custom data storage solution using RethinkDB for over 2500 users</li>
          </ul>
        </div>
      </section>

      {/* Publications Section */}
      <section 
        id="publications" 
        className={`scroll-section content-section ${visibleSections.has('publications') ? 'visible' : ''}`}
      >
        <h2 className="section-title">Publications</h2>
        
        <div className="publication-item">
          <p className="publication-citation">
            Mugahid, D., <strong>Lyon, J.</strong>, Demurjian, C., Eolin, N., Whittaker, C., Godek, M., Lauffenburger, D. A., Fortune, S., & Levine, S. (2024). A practical guide to FAIR data management in the age of multi-OMICS and AI. <i>Frontiers in Immunology: Microbial Immunology.</i> 15:1439434. <a href="https://doi.org/10.3389/fimmu.2024.1439434" target="_blank" rel="noopener noreferrer" className="doi-link">https://doi.org/10.3389/fimmu.2024.1439434</a>
          </p>
        </div>
      </section>

      {/* Hobbies Section */}
      <section 
        id="hobbies" 
        className={`scroll-section content-section ${visibleSections.has('hobbies') ? 'visible' : ''}`}
      >
        <h2 className="section-title">Hobbies</h2>
        
        <div className="hobby-item">
          <a href="https://www.youtube.com/playlist?list=PLUOd_w2Nu8k6Z0t2swcBmPvONDldOkyPl" target="_blank" rel="noopener noreferrer" className="item-external-link" aria-label="View more">
            ↗
          </a>
          <h3>Film & TV Production</h3>
          <p className="hobby-details">Freelance | September 2019 - Present</p>
          <ul>
            <li>Unit Production Manager, Assistant Director, Associate Producer, and Executive Producer on various independent film projects</li>
            <li>Directed and produced multiple short films in collaboration with NYU Tisch School of the Arts</li>
            <li>Supervised and coordinated teams across production sound mixing, stunt choreography, voiceover, and location scouting</li>
            <li>Management of on-set camera and audio teams, overseeing production schedules, and creative execution</li>
          </ul>
        </div>

        <div className="hobby-item">
          <a href="https://pcpartpicker.com/b/tw6rxr" target="_blank" rel="noopener noreferrer" className="item-external-link" aria-label="View more">
            ↗
          </a>
          <h3>Custom PC Building</h3>
          <p className="hobby-details">Freelance | March 2019 - Present</p>
          <ul>
            <li>Design and assembly of personal computers utilizing custom parts lists for specialized home applications in gaming, video/audio editing, and virtualization for a variety of clients</li>
            <li>Completion of ATX and Mini-ITX builds featuring custom wiring harnesses, advanced cooling & fan configurations, and specialized GPU mounting solutions</li>
            <li>Maintenance, repair, and upgrading of previous projects in order to extend operational lifespan and retain compute performance</li>
            <li>Construction of a custom home server running a Ubuntu-based Linux distribution for hosting applications</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className={`scroll-section content-section ${visibleSections.has('contact') ? 'visible' : ''}`}
      >
        <h2 className="section-title">Contact Me</h2>
        
        <div className="contact-container">
          <p className="contact-description">
            Email me anyday, anytime, about anything:
          </p>
          
          <button onClick={copyEmail} className="email-button">
            {emailCopied ? '✓ Copied!' : '📧 jaredalyon@gmail.com'}
          </button>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
          ↑
        </button>
      )}
    </div>
  )
}

export default App
