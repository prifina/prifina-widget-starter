import {
  createRequires,
  createUseRemoteComponent,
} from "@paciolan/remote-component";

/*
import { createUseRemoteComponent } from "@paciolan/remote-component/dist/hooks/useRemoteComponent";
import { createRequires } from "@paciolan/remote-component/dist/createRequires";
*/
import { resolve } from "./remote-component.config.js";

const requires = createRequires(resolve);

export const useRemoteComponent = createUseRemoteComponent({ requires });
