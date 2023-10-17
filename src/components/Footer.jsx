import socialData from "../data/social.json";

function Footer() {
  return (
    <div className="min-h-[14vh] bg-[#eef0f0] dark:bg-[#0d1117] p-5 dark:text-[#fafbfc] lg:sticky lg:bottom-0">
      <div className="min-h-[9vh] border-t border-solid border-gray-400 dark:border-white flex flex-row flex-wrap justify-between pt-4">
        <div className="mt-5">
          <em className="font-bold text-xl block">Email</em>
          <a href="mailto:shreyasbhatk97@gmail.com">
            <em>shreyasbhatk97@gmail.com</em>
          </a>
        </div>
        <div className="mt-5">
          <em className="font-bold text-xl block">Connect with Me</em>
          <div className="flex flex-wrap">
            {socialData.social.map((item) => {
              return (
                <a
                  href={`${item.link}`}
                  target="_blank"
                  rel="noreferrer"
                  className="transition duration-100 hover:scale-110"
                  key={item.name}
                >
                  <em
                    className={`${
                      item.style ? "border-r" : "border-none"
                    } border-solid dark:border-[#fafbfc] border-[#0d1117] pr-2 mr-2`}
                  >
                    {item.name}
                  </em>
                </a>
              );
            })}
          </div>
        </div>
        <div className="mt-5">
          <em className="block">Made with 💖</em>
          <em className="block">&copy; by Shreyas Bhat K.</em>
          <em className="text-xs">(last updated 10/2023)</em>
        </div>
      </div>
    </div>
  );
}

export default Footer;
