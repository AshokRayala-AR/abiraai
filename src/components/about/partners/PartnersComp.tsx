import WallmartLogo from "../../../assets/svg/wallmartLogo.svg";
import TrelloLogo from "../../../assets/svg/trello.svg";
import LinkedinLogo from "../../../assets/svg/linkedin.svg";
import TripadvisorLogo from "../../../assets/svg/tripadvisor.svg";
import MailchimpLogo from "../../../assets/svg/mailchimp.svg";
import SpotifyLogo from "../../../assets/svg/spotify.svg";
import NetflixLogo from "../../../assets/svg/netflix.svg";
import AmazonLogo from "../../../assets/svg/amazon.svg";

function PartnersComp() {
  return (
    <div className="p-16 bg-[#101720] flex flex-col w-full items-center justify-center gap-24">

      <div className="flex flex-col items-center justify-center gap-4">
      <p className="font-bold text-5xl">
            <span className="text-[20px] text-transparent bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400">
              Global Partners
            </span>
          </p>

          <p className="text-2xl md:text-4xl font-inter text-white font-[700]">
          We’ve 1250+ Global Partners
          </p>

      </div>

      <div className="flex md:items-end md:justify-end w-full ">

      <div className="flex md:flex md:flex-col gap-4 w-5/6 px-4 ">
      <div className="flex flex-col md:flex-row gap-2 justify-start">
        <span className="bg-white px-6 py-6 w-32 text-center flex justify-center items-center space-x-1">
          <p className="font-inter font-bold tracking-wide ">Wallmart</p>
          <img src={WallmartLogo} className="w-5 h-5" alt="wallmart" />
        </span> 
        <span className="bg-white px-6 py-6 w-32 text-center">
          <p className="font-inter font-bold tracking-wide">adidas</p>
        </span>
        <span className="bg-white px-6 py-6 w-32 text-center flex justify-center items-center space-x-1">
          <p className="font-inter font-bold tracking-wide">Trello</p>
          <img src={TrelloLogo} className="w-5 h-5" alt="trello" />
        </span>
        <span className="bg-white px-6 py-6 w-32 text-center flex justify-center items-center space-x-1">
          <p className="font-inter font-bold tracking-wide">Linkedin</p>
          <img src={LinkedinLogo} className="w-5 h-5" alt="linkedin" />
        </span>
        <span className="bg-white px-6 py-6 w-32 text-center flex justify-center items-center space-x-1">
          <p className="font-inter font-bold tracking-wide">appen</p>
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-2 justify-center  max-w-5xl mx-auto mt-28 md:mt-0">
        <span className="bg-white px-6 py-6 w-32 text-center flex justify-center items-center space-x-1">
          <img src={TripadvisorLogo} className="w-6 h-6" alt="tripadvisor" />
          <p className="font-inter font-bold tracking-wide ">Tripadvisor</p>
        </span>
        <span className="bg-white px-6 py-6 w-32 text-center flex justify-center items-center space-x-1">
          <img src={MailchimpLogo} className="w-6 h-6" alt="mailchimp" />
          <p className="font-inter font-bold tracking-wide">mailschimp</p>
        </span>
        <span className="bg-white px-6 py-6 w-32 text-center flex justify-center items-center space-x-1">
          <img src={SpotifyLogo} className="w-6 h-6" alt="spotify" />
          <p className="font-inter font-bold tracking-wide">Spotify</p>
        </span>
        <span className="bg-white px-6 py-6 w-32 text-center justify-center flex-col items-center -space-y-1">
          <p className="font-inter font-bold">amazon</p>
          <img src={AmazonLogo} alt="amazon" className="w-8 ml-4 " />
        </span>
        <span className="bg-white w-32 p-6 text-center flex items-center justify-center">
          <img src={NetflixLogo} alt="netflix-logo" className="" />
        </span>
      </div>
      </div>
      </div>

    </div>
  );
}

export default PartnersComp;