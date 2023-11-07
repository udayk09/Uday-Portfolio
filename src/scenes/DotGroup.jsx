import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
    const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6
    //  before:rounded-full before:border-2 
     before:border-yellow before:left-[-50%]
     before:top-[-50%] `;
    
    return <div className="flex flex-col  gap=-6 fixed top-[60%] right-7">
    <AnchorLink
      className={`${
        selectedPage === 'home' ? selectedStyles: "bg-dark-grey"
      } w-3 h-3 rounded-full`}
      href="#home"
      onClick={() => setSelectedPage("home")}
    />
    <AnchorLink
      className={`${
        selectedPage === 'Skills' ? selectedStyles: "bg-dark-grey"
      } w-3 h-3 rounded-full`}
      href="#Skills"
      onClick={() => setSelectedPage("Skills")}
    />
    <AnchorLink
      className={`${
        selectedPage === 'Projects' ? selectedStyles: "bg-dark-grey"
      } w-3 h-3 rounded-full`}
      href="#Projects"
      onClick={() => setSelectedPage("Projects")}
    />
    <AnchorLink
      className={`${
        selectedPage === 'Testimonials' ? selectedStyles: "bg-dark-grey"
      } w-3 h-3 rounded-full`}
      href="#Testimonials"
      onClick={() => setSelectedPage("Testimonials")}
    />
    <AnchorLink
      className={`${
        selectedPage === 'Contact' ? selectedStyles: "bg-dark-grey"
      } w-3 h-3 rounded-full`}
      href="#Contact"
      onClick={() => setSelectedPage("Contact")}
    />
    </div>;
};

export default DotGroup;