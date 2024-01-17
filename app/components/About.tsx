import { LoremIpsum } from "react-lorem-ipsum";
import Skills from "./Skills";
import { SectionHeader } from "./SectionHeader";

export default function About() {
  return (
    <section>
      <SectionHeader title="About" />
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-28">
        <div className="flex flex-col gap-4 text-lg text-slate-400">
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Pretium rhoncus
            inceptos sagittis sociosqu; molestie nostra nam. Conubia nisi
            egestas senectus orci cras diam. Habitasse vulputate lacus convallis
            elementum dui aliquam lectus. Magna faucibus diam elementum,
            volutpat ligula consectetur. Egestas libero cubilia platea fusce
            nascetur pellentesque! Tempor nec suscipit curae facilisis massa
            nullam mus augue leo.
          </p>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Pretium rhoncus
            inceptos sagittis sociosqu; molestie nostra nam. Conubia nisi
            egestas senectus orci cras diam. Habitasse vulputate lacus convallis
            elementum dui aliquam lectus. Magna faucibus diam elementum,
            volutpat ligula consectetur. Egestas libero cubilia platea fusce
            nascetur pellentesque! Tempor nec suscipit curae facilisis massa
            nullam mus augue leo.
          </p>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Pretium rhoncus
            inceptos sagittis sociosqu; molestie nostra nam. Conubia nisi
            egestas senectus orci cras diam. Habitasse vulputate lacus convallis
            elementum dui aliquam lectus. Magna faucibus diam elementum,
            volutpat ligula consectetur. Egestas libero cubilia platea fusce
            nascetur pellentesque! Tempor nec suscipit curae facilisis massa
            nullam mus augue leo.
          </p>
        </div>
        <Skills />
      </div>
    </section>
  );
}
