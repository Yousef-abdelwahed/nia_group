import TabButtons from "@/components/Tabs/components/TabButtons";
import TabContent from "@/components/Tabs/components/TabContent";
import Tabs from "@/components/Tabs/Tabs";
import React from "react";
import { useTranslation } from "react-i18next";

const LocationSection = ({ contactsData }) => {
  const { t, i18n } = useTranslation();
  const [selectedLocationIndex, setSelectedLocationIndex] =
    React.useState<number>(0);

  const saudiContacts = React.useMemo(
    () => contactsData.filter((contact) => contact.location === "saudi"),
    [contactsData]
  );
  const egpContacts = React.useMemo(
    () => contactsData.filter((contact) => contact.location === "egp"),
    [contactsData]
  );
  const location = [t("location.sa"), t("location.eg")];
  const [selectedTabIndex, setSelectedTabIndex] = React.useState<number>(0);
  const handleOnClick = React.useCallback(
    (index: number) => setSelectedTabIndex(index),
    []
  );

  return (
    <>
      <section className=" bg-[#FFFDFB]   relative z-10 ">
        <div className="lg:p-[10px] mt-6 mx-auto rounded-3xl container lg:px-4">
          <div className="flex flex-col lg:flex-row lg:gap-4 items-center  justify-between lg:w-[98.5%] mx-auto mb-[32px] lg:mb-[62px]">
            <Tabs type="location" selectedTabIndex={selectedTabIndex}>
              {/* SA */}
              <TabContent>
                <>
                  <div className="w-full md:w-[420px] xl:w-[33.8%] max-lg:mb-[24px] m-auto  flex flex-col   justify-center ">
                    <div className="w-[71.4%]  mx-auto text-lg  md:text-xl  ">
                      <TabButtons
                        tabHeader={location}
                        types="location"
                        selectedTabIndex={selectedTabIndex}
                        handleOnClick={handleOnClick}
                      />
                    </div>
                    {saudiContacts.map((contact) => (
                      <div
                        key={contact.id}
                        onClick={() => setSelectedLocationIndex(contact.id)}
                        className="shadowEffect flex flex-col w-[95.4%] lg:w-full   mx-auto max-w-[420px] p-[10px] gap-4 bg-white rounded-[10px] shadowEffect mt-4 "
                      >
                        <div className="address flex">
                          <span className={`me-2`}>{contact.iconAdds}</span>
                          <span
                            className=""
                            dangerouslySetInnerHTML={{
                              __html: contact.adds,
                            }}
                          ></span>
                        </div>
                        <div className={`phone flex `}>
                          <span className={`me-2 `}>{contact.iconPhone}</span>
                          <span
                            className={`${
                              i18n.language === "ar" && "phoneDirection"
                            }`}
                          >
                            {contact.phone}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="w-[95.2%] md:w-[94%] lg:ms-auto max-md:mx-auto lg:w-[60.4%]  h-[246px] sm:h-[382px] lg:h-[616px]  overflow-hidden ">
                    {/* <AddressLocation locations={soaudiLocation} /> */}
                    {selectedLocationIndex === 1 ? (
                      <iframe
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.82126660878!2d46.735175!3d24.6298444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0500739e9cc5%3A0x4494fffba0bc7870!2z2LTYsdmD2Kkg2KfZhNmB2YPYsdipINin2YTZiNi32YbZitmHINmE2YTYr9i52KfZitmHINmI2KfZhNin2LnZhNin2YY!5e0!3m2!1sen!2seg!4v1725457732250!5m2!1sen!2seg"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    ) : (
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3710.664952672145!2d39.188849375271374!3d21.559952380225695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDMzJzM1LjgiTiAzOcKwMTEnMjkuMSJF!5e0!3m2!1sen!2seg!4v1725531214643!5m2!1sen!2seg"
                        className="w-full h-full"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    )}
                  </div>
                </>
              </TabContent>
              {/* EGYPT */}
              <TabContent>
                <>
                  <div className="w-full md:w-[420px] lg:w-[33.8%] max-md:mb-[24px] m-auto  flex flex-col   justify-center ">
                    <div className="w-[71.4%] mx-auto text-lg  md:text-xl">
                      <TabButtons
                        types="location"
                        tabHeader={location}
                        selectedTabIndex={selectedTabIndex}
                        handleOnClick={handleOnClick}
                      />
                    </div>
                    {egpContacts.map((contact) => (
                      <div
                        key={contact.id}
                        className="shadowEffect mb-4 flex flex-col w-[95.4%] lg:w-full mx-auto max-w-[420px] p-[10px] gap-4 bg-white rounded-[10px] shadowEffect mt-4 "
                      >
                        <div className="address flex">
                          <span className="me-2">{contact.iconAdds}</span>{" "}
                          <span
                            className=""
                            dangerouslySetInnerHTML={{
                              __html: contact.adds,
                            }}
                          ></span>
                        </div>
                        <div className="phone flex">
                          <span className="me-2">{contact.iconPhone}</span>
                          <span
                            className={`${
                              i18n.language === "ar" && "phoneDirection"
                            }`}
                          >
                            {contact.phone}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="md:w-[94%]  w-full lg:ms-auto max-md:mx-auto lg:w-[60.4%]  h-[246px] sm:h-[382px] xl:h-[616px]  overflow-hidden ">
                    {/* <AddressLocation locations={egpLocation} /> */}

                    <iframe
                      className="w-full h-full"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.2816259024455!2d31.2110639!3d30.0147202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145846e11ac5de1d%3A0x4bd49368639ecfff!2z2LTYsdmD2Kkg2K_YqNmG2KzYqA!5e0!3m2!1sen!2sus!4v1698688011704!5m2!1sen!2sus"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </>
              </TabContent>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationSection;
