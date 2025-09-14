export default function Footer() {
   //Se suele colocar el año actual
   const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>{currentYear} Todos los derechos reservados.</p>
        </footer>
    );
}