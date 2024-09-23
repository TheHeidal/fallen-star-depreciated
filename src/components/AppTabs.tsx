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
  console.log(props.tabs);
  console.log(route);
  console.log(route?.params.path);

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
          {/* <Tab id="orrery" href="orrery">
            "orrery"
          </Tab>
          <Tab id="necromancer" href="necromancer">
            "necromancer"
          </Tab>
          <Tab id="hierophant" href="hierophant">
            "hierophant"
          </Tab>
          <Tab id="warlock" href="warlock">
            "warlock"
          </Tab>
          <Tab id="mariner" href="mariner">
            "mariner"
          </Tab>
          <Tab id="faustian" href="faustian">
            "faustian"
          </Tab>
          <Tab id="sorcerer" href="sorcerer">
            "sorcerer"
          </Tab>
          <Tab id="anchorite" href="anchorite">
            "anchorite"
          </Tab>
          <Tab id="grimoire" href="grimoire">
            "grimoire"
          </Tab>
          <Tab id="rulebook" href="rulebook">
            "rulebook"
          </Tab> */}
        </TabList>
        <TabPanel id={matchedPath}>
          <Outlet />
          {/* <Routes>
            <Route path="orrery" element={"Orrery"} />
            <Route path="necromancer" element={<Wizard />} />
            <Route path="hierophant" element={<Wizard />} />
            <Route path="warlock" element={<Wizard />} />
            <Route path="mariner" element={<Wizard />} />
            <Route path="faustian" element={<Wizard />} />
            <Route path="sorcerer" element={<Wizard />} />
            <Route path="anchorite" element={<Wizard />} />
            <Route path="grimoire" element={"Grimoire"} />
            <Route path="rulebook" element={"Rulebook"} />
          </Routes> */}
        </TabPanel>
      </Tabs>
    </RouterProvider>
  );
}
