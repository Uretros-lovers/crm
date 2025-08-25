type Crumb = {
    label: string;
    href?: string;
};

const Header = () => {
    const breadcrumbs: Crumb[] = [
        { label: "Workspace", href: "/" },
        { label: "Projects", href: "/projects" },
    ];

    return (
        <header>
            <a href="">logo</a>
            <nav>
                <ul>
                    {breadcrumbs.map((crumb, i) => (
                        <li key={i}>
                            {crumb.href ? (
                                <a href={crumb.href}>{crumb.label}</a>
                            ) : (
                                <p>жопа?</p>
                            )}
                            {i < breadcrumbs.length - 1 && <span> {">"} </span>}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
