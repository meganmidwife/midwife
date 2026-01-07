
import { FC } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import clsx from "clsx";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import { PiArrowsClockwise, PiGear } from "react-icons/pi";
import AnimatedContent from "./AnimatedContent";

const icons = {
  gear: <PiGear />,
  cycle: <PiArrowsClockwise />,
};

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About: FC<AboutProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative"
    >
      <div className="glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-blue-400/20 blur-3xl filter" />

      <AnimatedContent>
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-balance text-center text-5xl font-medium md:text-7xl">
                {children}
              </h2>
            ),
          }}
        />
      </AnimatedContent>
      <div className="mt-16 grid items-center gap-8 rounded-xl border-4 border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12">
        <div>
            <div className="w-full rounded-lg p-4 text-3xl">
            {slice.primary.logo &&<PrismicNextImage field={slice.primary.logo} className="max-w-40 border-2 mx-auto" />}
              {/* <>{slice.primary.icon && icons[slice.primary.icon]}</> */}
            </div>
            <div className="mt-6 text-2xl font-normal">
              { slice.primary.heading && <PrismicRichText field={slice.primary.heading} />}
            </div>

            <div className="prose prose-invert mt-4 max-w-xl">
              {slice.primary.description && <PrismicRichText field={slice.primary.description} />}
            </div>

            {slice.primary.link && <ButtonLink field={slice.primary.link} className="mt-6">
              {slice.primary.link_text || "Learn More"}
            </ButtonLink>}
        </div>
      <PrismicNextImage
          field={slice.primary.image}
          alt=""
          className={clsx(
            "opacity-90 shadow-2xl lg:col-span-2 lg:pt-0 max-w-100",
            slice.variation === "reverse"
              ? "lg:order-1 lg:translate-x-[95%]"
              : "lg:-order-1 lg:translate-x-[-15%]",
          )}
          sizes="(max-width: 100px) 20vw, 10vw"
        />
      </div>
      {/* <PrismicNextImage field={slice.primary.image} />
      <PrismicNextImage field={slice.primary.logo} />
      <PrismicRichText field={slice.primary.description} />
      <PrismicRichText field={slice.primary.footertext} /> */}
    </Bounded>
  );
};

export default About;
