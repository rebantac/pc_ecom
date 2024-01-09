
import FadeIn from "../components/FadeIn";

import shippingIcon from "../assets/free-shiping-icon.svg";
import paymentIcon from "../assets/quick-payment-icon.svg";
import supportIcon from "../assets/support-icon.svg";

const Services = () => {
    const services = [
        {
          title: "Free Shipping",
          subtitle: "No charge for your delivery",
          icon: shippingIcon,
        },
        {
          title: "Quick Payment",
          subtitle: "100% secure",
          icon: paymentIcon,
        },
        {
          title: "24/7 Support",
          subtitle: "Don't hesitate to contact us",
          icon: supportIcon,
        },
      ];

  return (
    <div
      id="services"
      className="mt-[160px] max-w-[1490px] mx-auto px-10 flex flex-col xs:flex-row gap-12 xs:gap-6 xs:justify-between w-full"
    >
      {services.map((service, i) => (
        <FadeIn key={i} delay={0.2} direction="down">
          <div className="flex flex-col lg:flex-row gap-4 w-full items-center">
            <img
              src={service.icon}
              className="max-h-[84px] max-w-[84px]"
              alt=""
            />
            <div className="flex flex-col gap-1.5">
              <h3 className="text-center lg:text-start text-2xl lg:text-[28px] text-fontBlack font-medium">
                {service.title}
              </h3>
              <h6 className="text-center lg:text-start text-base lg:text-lg text-fontGray font-medium">
                {service.subtitle}
              </h6>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
};

export default Services;