function Footer() {
  return (
    <div className="min-h-[14vh] bg-[#eef0f0] dark:bg-[#0d1117] p-5 dark:text-[#fafbfc]">
      <div className="min-h-[9vh] border-t border-solid border-gray-400 dark:border-white flex flex-row flex-wrap justify-between pt-4">
        <div className="mt-5">
          <em className="font-bold text-xl block">Email</em>
          <a href="mailto:shreyasbhatk97">
            <em>shreyasbhatk97@gmail.com</em>
          </a>
        </div>
        <div className="mt-5">
          <em className="font-bold text-xl block">Connect with Me</em>
          <div className="flex flex-wrap">
            <a
              href="https://www.linkedin.com/in/shreyas-bhat-k"
              target="_blank"
              rel="noreferrer"
              className="transition duration-100 hover:scale-110"
            >
              <em className="border-r border-solid dark:border-[#fafbfc] border-[#0d1117] pr-2 mr-2">
                LinkedIn
              </em>
            </a>
            <a
              href="https://www.hackerrank.com/shreyas1744"
              target="_blank"
              rel="noreferrer"
              className="transition duration-100 hover:scale-110"
            >
              <em className="border-r border-solid dark:border-[#fafbfc] border-[#0d1117] pr-2 mr-2">
                HackerRank
              </em>
            </a>
            <a
              href="https://discord.com/users/273714636635897856"
              target="_blank"
              rel="noreferrer"
              className="transition duration-100 hover:scale-110"
            >
              <em className="border-r border-solid dark:border-[#fafbfc] border-[#0d1117] pr-2 mr-2">
                Discord
              </em>
            </a>
            <a
              href="https://www.github.com/Arkanobot"
              target="_blank"
              rel="noreferrer"
              className="transition duration-100 hover:scale-110"
            >
              <em>Github</em>
            </a>
          </div>
        </div>
        <div className="mt-5">
          <em className="block">Made with 💖</em>
          <em>&copy; by Shreyas Bhat K.</em>
        </div>
      </div>
    </div>
  );
}

export default Footer;
