import {
  RouterProvider,
  Tabs,
  TabList,
  Tab,
  TabPanel,
} from "react-aria-components";
import {
  Outlet,
  useHref,
  useMatch,
  useNavigate,
  useResolvedPath,
} from "react-router-dom";

const pages = [
  { url: "orrery", display: "Orrery" },
  { url: "necromancer", display: "Necromancer" },
  { url: "hierophant", display: "Hierophant" },
  { url: "warlock", display: "Warlock" },
  { url: "mariner", display: "Mariner" },
  { url: "faustian", display: "Faustian" },
  { url: "sorcerer", display: "Sorcerer" },
  { url: "anchorite", display: "Anchorite" },
  { url: "grimoire", display: "Grimoire" },
  { url: "rulebook", display: "Rulebook" },
];

export default function AppTabs(props: {
  tabs: { url: string; display: any }[];
}) {
  const { pathname } = useResolvedPath("");
  const route = useMatch(`${pathname}/:path/*`);
  const matchedPath = route?.params.path;
  return (
    <RouterProvider navigate={useNavigate()} useHref={useHref}>
      <Tabs selectedKey={matchedPath}>
        <TabList aria-label="Tabs">
          {props.tabs?.map(({ url, display }) => {
            return (
              <Tab key={url} id={url} href={url}>
                {display}
              </Tab>
            );
          })}
        </TabList>
        <TabPanel id={matchedPath}>
          <Outlet />
        </TabPanel>
      </Tabs>
    </RouterProvider>
  );
}
