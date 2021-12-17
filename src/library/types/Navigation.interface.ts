// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {TabBarIconName} from './Icons.interface';

export type TabBarRoute = {
  route: string;
  label: string;
  iconName: TabBarIconName;
  disabled?: boolean;
  notificationsCount?: number;
};

export type TabBarRouteMap = Record<string, TabBarRoute>;

export type TabBarRouteConfig = {
  screen: React.ComponentType<any>;
} & TabBarRoute;
