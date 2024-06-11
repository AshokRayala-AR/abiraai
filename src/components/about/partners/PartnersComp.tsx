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
    <div className="px-2 py-12  w-full space-y-2 flex flex-wrap overflow-scroll">
      <div className="flex gap-2 justify-start max-w-5xl mx-auto">
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
      <div className="flex gap-2 justify-end max-w-5xl mx-auto">
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
        <span className="bg-white w-32 text-center flex items-center">
          <img src={NetflixLogo} alt="netflix-logo" className="w-full h-auto" />
        </span>
      </div>
    </div>
  );
}

export default PartnersComp;