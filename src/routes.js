// Pages
import {
  AppBar,
  Autocomplete,
  Avatars,
  BackendError,
  Badges,
  ButtonNavigation,
  Buttons,
  Cards,
  Chips,
  Dividers,
  Drawers,
  Editor,
  ExpansionPanels,
  GridList,
  Home,
  Lists,
  Lockscreen,
  Menus,
  NotFound,
  Paper,
  PasswordReset,
  Pickers,
  Progress,
  SelectionControls,
  Selects,
  Signin,
  Signup,
  Snackbars,
  Steppers,
  Tables,
  Tabs,
  Taskboard,
  TextFields,
  Tooltips,
} from './pages';

import EqualizerIcon from '@material-ui/icons/Equalizer';
// Icons
import ExploreIcon from '@material-ui/icons/Explore';
import FaceIcon from '@material-ui/icons/Face';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import Looks3Icon from '@material-ui/icons/Looks3';
import PersonIcon from '@material-ui/icons/Person';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';

export default {
  items: [
    {
      path: '/',
      name: 'Add Question',
      type: 'link',
      icon: ExploreIcon,
      component: Home
    },
    {
      path: '/material',
      name: 'Material',
      type: 'submenu',
      icon: EqualizerIcon,
      badge: {
        type: 'error',
        value: '10'
      },
      children: [
        {
          path: '/appbar',
          name: 'App Bar',
          component: AppBar
        },
        {
          path: '/autocomplete',
          name: 'Auto Complete',
          component: Autocomplete
        },
        {
          path: '/avatars',
          name: 'Avatars',
          component: Avatars
        },
        {
          path: '/badges',
          name: 'Badges',
          component: Badges
        },
        {
          path: '/button-navigation',
          name: 'Button Navigation',
          component: ButtonNavigation
        },
        {
          path: '/buttons',
          name: 'Buttons',
          component: Buttons
        },
        {
          path: '/cards',
          name: 'Cards',
          component: Cards
        },
        {
          path: '/chips',
          name: 'Chips',
          component: Chips
        },
        {
          path: '/dividers',
          name: 'Dividers',
          component: Dividers
        },
        {
          path: '/drawers',
          name: 'Drawers',
          component: Drawers
        },
        {
          path: '/expansion-panels',
          name: 'Expansion Panels',
          component: ExpansionPanels
        },
        {
          path: '/grid-list',
          name: 'Grid List',
          component: GridList
        },
        {
          path: '/lists',
          name: 'Lists',
          component: Lists
        },
        {
          path: '/menus',
          name: 'Menus',
          component: Menus
        },
        {
          path: '/paper',
          name: 'Paper',
          component: Paper
        },
        {
          path: '/pickers',
          name: 'Pickers',
          component: Pickers
        },
        {
          path: '/progress',
          name: 'Progress',
          component: Progress
        },
        {
          path: '/selection-controls',
          name: 'Selection Controls',
          component: SelectionControls
        },
        {
          path: '/selects',
          name: 'Selects',
          component: Selects
        },
        {
          path: '/snackbars',
          name: 'Snackbars',
          component: Snackbars
        },
        {
          path: '/steppers',
          name: 'Steppers',
          component: Steppers
        },
        {
          path: '/tables',
          name: 'Tables',
          component: Tables
        },
        {
          path: '/tabs',
          name: 'Tabs',
          component: Tabs
        },
        {
          path: '/text-fields',
          name: 'Text Fields',
          component: TextFields
        },
        {
          path: '/tooltips',
          name: 'Tooltips',
          component: Tooltips
        }
      ]
    },
    {
      path: '/editor',
      name: 'Editor',
      type: 'link',
      icon: Looks3Icon,
      component: Editor
    },
    {
      path: '/taskboard',
      name: 'Taskboard',
      type: 'link',
      icon: ViewColumnIcon,
      component: Taskboard
    },
    {
      name: 'Authentication',
      type: 'submenu',
      icon: PersonIcon,
      children: [
        {
          path: '/signin',
          name: 'Signin',
          component: Signin
        },
        {
          path: '/signup',
          name: 'Signup',
          component: Signup
        },
        {
          path: '/forgot',
          name: 'Forgot',
          component: PasswordReset
        },
        {
          path: '/lockscreen',
          name: 'Lockscreen',
          component: Lockscreen
        }
      ]
    },
    {
      name: 'Error',
      type: 'submenu',
      icon: FaceIcon,
      children: [
        {
          path: '/404',
          name: '404',
          component: NotFound
        },
        {
          path: '/500',
          name: 'Error',
          component: BackendError
        }
      ]
    },
    {
      path: 'https://iamnyasha.github.io/react-primer-docs/',
      name: 'Documentation',
      type: 'external',
      icon: LocalLibraryIcon
    },
  ]
};
