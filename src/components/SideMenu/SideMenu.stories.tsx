import SideMenu from ".";

export default {
  children: "",
  title: "Component/SideMenu",
  component: SideMenu,
};

const Template = (args: any) => <SideMenu {...args} />;

const props = {
  defaultProps: () => ({}),
};

export const SideMenuStory: any = Template.bind({});

const defaultProps = props.defaultProps();
SideMenuStory.storyName = "SideMenu";
SideMenuStory.args = {
  ...defaultProps,
};
