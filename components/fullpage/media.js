import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Lettering from "../lettering/lettering";
import Background from "../background/background";
import Content from "../content/content";
import FixedLettering from "../fixed-lettering/fixed-lettering";
import Section from "../section/section";
import Page from "../page/page";
import "./fullpage.css";

export const Home = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#292c35">
      <Content
        main={
          <Lettering
            title="Привет"
            text={[
              "Это небольшая подборка историй с иллюстрациями от @vallogika",
            ]}
          />
        }
        action={
          <div className="button">
            <AwesomeButton
              size="large"
              onPress={() => {
                fullpage.navigate("/page-two");
              }}
            >
              Goto the next page
            </AwesomeButton>
          </div>
        }
      />
    </Section>
  );
});

export const Third = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#ff6f5e">
      <Background src="/static/bojack.png" />
      <Content
        main={
          <Lettering
            title="PAGE 3"
            text={["This is a screen with preloaded background image."]}
          />
        }
        action={
          <div className="button">
            <AwesomeButton
              size="large"
              onPress={() => {
                fullpage.navigate("/page-two");
              }}
            >
              Goto the prev page
            </AwesomeButton>
          </div>
        }
      />
    </Section>
  );
});

const firstText = [
  "Утро Верона началось с хлопьев и плавно перетекло в кресло под рассветное солнце ☀. " +
    "День обещал быть долгим. Нужно было выбраться в ближайший город за несколько километров от дома," +
    "отыскать пару банок консервированных ананасов и передать их товарищу и по совместительству соработнику ее отца." +
    "Оба они полярники. Вместе росли, учились и одержимы северными просторами и белыми медведями." +
    "Поэтому оба выучились на исследователей и стали надолго уезжать то на полярные станции, то в экспедиции." +
    "И вот этот товарищ приехал в город на пару дней отпуска и, в свою очередь, по приезду обратно на станцию «Восток» вручит другу заветные ананасы. 🍍" +
    "Да, у последнего небольшая аллергия на ананасы, жена из любви передаёт только необходимые невредные продукты.." +
    "Но Верон втайне от маман вызвалась передавать бате консервы с оговоркой, что он растянет одну- две банки на 5 оставшихся месяцев." +
    "Так и жили." +
    "И вот сегодня тот самый день, когда она выполнит свой дочерний долг и услышит невероятное количество северных приключений, приправленных яркими тропами и жестикуляцией КолКолыча." +
    "А пока Верочка прогуливалась глазами по последним страницам «Трёх мушкетеров»... Влюблённая в благородного, флегматичного и глубокого Атоса," +
    "она была недовольна последними событиями в книге, но следила за каждой описанной деталью о его мимике, жестах.. и старалась прочесть что-то между строк." +
    "Она поражалась, насколько нужно быть сильным, чтобы вывезти такую тяжелую судьбу и таких разноперых сложных друзей🐴",
];

export const media = [
  {
    slug: "",
    className: "slide page-one",
    children: <Home />,
  },
  {
    slug: "page-two",
    className: "page-two",
    preload: ["/static/Утро_пнг.png"],
    children: (
      <Page>
        <Section wrapper={false}>
          <Background src="/static/Утро_пнг.png" />
          <Content
            main={
              <FixedLettering
                title="История 1. Утро."
                text={firstText}
              />
            }
          />
        </Section>
        <Section backgroundColor="#617be3">
          <Lettering
            text={firstText}
          />
        </Section>
      </Page>
    ),
  },
  {
    slug: "page-three",
    preload: ["/static/bojack.png"],
    className: "slide page-three",
    children: <Third />,
  },
];
