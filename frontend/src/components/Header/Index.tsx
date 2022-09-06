import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
                Desenvolvido Por:
                <a href="https://www.instagram.com/yago_neves/">@yago_neves</a>

            </p>
        </div>

    )

}

export default Header