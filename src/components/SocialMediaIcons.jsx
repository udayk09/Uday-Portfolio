const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/udayk-javaawsdevops/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src="../assets/linkedin.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://leetcode.com/udayrajuk/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="leetcode-link" src="../assets/Leetcode.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/udayk09"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="github-link" src="../assets/Github.png" />
        </a>
        {/* <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src="../assets/instagram.png" />
        </a> */}
      </div>
    );
  };
  
  export default SocialMediaIcons;