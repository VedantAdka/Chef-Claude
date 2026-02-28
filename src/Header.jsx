import chefIcon from "./assets/Chef Claude Icon.png";
export default function Header() {
    return (
        <header>
            <img 
                src={chefIcon} 
                alt="Chef Claude Icon"
                style={{ width: "60px" }}
            />
            <h1>Chef Claude</h1>
        </header>
    );
}