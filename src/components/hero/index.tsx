
interface Props {
    companyTitle : string;
    companyTagline : string;
    textStyle : string;
    videoWidth : string;
    videoUrl : string;
}

export default function Hero(props : Props) {
    return (
        <section id="hero">
              <div className="flex justify-center bg-charcoal-gray relative md:pb-[40px]">
                  <video  muted autoPlay loop className={`max-w-[` +props.videoWidth+`px] w-full`}>
                      <source src={props.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
                  <div className="w-[100%] h-[100%] z-2 bg-charcoal-gray-alpha absolute"></div>
                  <span className={`absolute z-3 top-4  text-3xl md:text-4xl ${props.textStyle} font-semibold`}>
                    <h1>{props.companyTitle}</h1>
                  </span>
                  <span className={`absolute z-3 top-16 text-xl md:text-2xl ${props.textStyle} `}>
                    <h1>{props.companyTagline}</h1>
                  </span>
              </div>
        </section>
    );
}