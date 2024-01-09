import React from "react";
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
    <div className="container mx-auto mt-12 px-4 sm:px-6 lg:px-8 grid gap-4 grid-cols-1 sm:grid-cols-3">
      {services.map((service, i) => (
        <FadeIn key={i} delay={0.2} direction="down">
          <div className="flex flex-col items-center text-center">
            <img
              src={service.icon}
              className="max-h-[84px] max-w-[84px] mb-4"
              alt=""
            />
            <h3 className="text-2xl sm:text-3xl lg:text-[28px] text-fontBlack font-medium mb-1">
              {service.title}
            </h3>
            <h6 className="text-base sm:text-lg lg:text-lg text-fontGray font-medium">
              {service.subtitle}
            </h6>
          </div>
        </FadeIn>
      ))}
    </div>
  );
};

export default Services;
