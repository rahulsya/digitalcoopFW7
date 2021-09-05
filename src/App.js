import Routers from "./routers";
import { App, View, Page } from "framework7-react";
export default function index() {
  return (
    <App theme="auto" name="My App">
      <View main>
        <Page>
          <Routers />
        </Page>
      </View>
    </App>
  );
}
