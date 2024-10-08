import type { ComponentType } from "react";

import { type IconProperties } from "./types";
import {
  FiCornerDownRight,
  FiAlertCircle,
  FiActivity,
  FiBarChart2,
  FiBold,
  FiBookmark,
  FiBriefcase,
  FiCalendar,
  FiCheck,
  FiCheckCircle,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiChevronUp,
  FiClock,
  FiCompass,
  FiCopy,
  FiCornerDownLeft,
  FiCreditCard,
  FiCrosshair,
  FiDatabase,
  FiDollarSign,
  FiEdit,
  FiEdit3,
  FiExternalLink,
  FiLink,
  FiFile,
  FiFileText,
  FiGlobe,
  FiHash,
  FiHeart,
  FiHelpCircle,
  FiImage,
  FiItalic,
  FiMail,
  FiMaximize2,
  FiMessageCircle,
  FiMessageSquare,
  FiMoreHorizontal,
  FiMoreVertical,
  FiMove,
  FiPlayCircle,
  FiPlus,
  FiPlusCircle,
  FiPocket,
  FiPhone,
  FiSearch,
  FiServer,
  FiSliders,
  FiSmile,
  FiSun,
  FiTag,
  FiTrash,
  FiTwitter,
  FiType,
  FiUnderline,
  FiUpload,
  FiUserCheck,
  FiUserPlus,
  FiUsers,
  FiUser,
  FiVideo,
  FiWatch,
  FiX,
  FiZap,
  FiMapPin,
  FiTool,
  FiMap,
  FiMaximize,
  FiArrowRight,
  FiArrowLeft,
  FiArrowDown,
  FiArrowUp,
  FiDelete,
} from "react-icons/fi";
import {
  BsCheckSquareFill,
  BsChevronExpand,
  BsDiscord,
  BsGear,
  BsReddit,
  BsTelegram,
} from "react-icons/bs";
import { CgFontSpacing, CgSpinner } from "react-icons/cg";
import { LuMessagesSquare, LuRepeat2, LuRocket } from "react-icons/lu";
import {
  RxBackpack,
  RxBarChart,
  RxCardStack,
  RxDividerVertical,
  RxGroup,
  RxMix,
  RxQuestionMark,
  RxQuote,
} from "react-icons/rx";
import { BiFont, BiLogoLinkedin, BiSolidCarousel } from "react-icons/bi";
import { TbBrandTwitterFilled } from "react-icons/tb";
import {
  IoBulbOutline,
  IoCheckmarkCircle,
  IoRemoveCircleOutline,
  IoFilterOutline,
} from "react-icons/io5";
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  ArrowUp,
  CodeIcon,
  CornerDownRight,
  Eye,
  LinkIcon,
  List,
  LucideArrowLeftToLine,
  LucideArrowRightToLine,
  LucideUserCircle2,
  Mail,
  PieChart,
  Redo2Icon,
  Sliders,
  StopCircle,
  StrikethroughIcon,
  Undo2Icon,
  XOctagon,
} from "lucide-react";
import { FaClockRotateLeft } from "react-icons/fa6";
import { LuBuilding2 } from "react-icons/lu";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";

import { MdPublishedWithChanges } from "react-icons/md";
import { fromIcon } from "./utils";

type Icons = Record<string, ComponentType<IconProperties>>;

function defineIcons<const TIcons extends Icons>(icons: TIcons) {
  return icons;
}

export type IconType = keyof typeof icons;

export const icons = defineIcons({
  alert: fromIcon(FiAlertCircle),
  arrowCurvedRight: FiCornerDownRight,
  building: fromIcon(LuBuilding2),
  check: fromIcon(FiCheck),
  dollarSign: fromIcon(FiDollarSign),
  search: fromIcon(FiSearch),
  loader: fromIcon(CgSpinner),
  upload: fromIcon(FiUpload),
  userPlus: fromIcon(FiUserPlus),
  filter: fromIcon(FiSliders),
  calendar: fromIcon(FiCalendar),
  zap: fromIcon(FiZap),
  wallet: fromIcon(FiCreditCard),
  email: fromIcon(FiMail),
  twitter: fromIcon(FiTwitter),
  globe: fromIcon(FiGlobe),
  hash: fromIcon(FiHash),
  tag: fromIcon(FiTag),
  store: fromIcon(HiOutlineBuildingStorefront),
  clockRotateLeft: fromIcon(FaClockRotateLeft),
  discord: fromIcon(BsDiscord),
  telegram: fromIcon(BsTelegram),
  cornerleft: fromIcon(FiCornerDownLeft),
  chevronup: fromIcon(FiChevronUp),
  cross: fromIcon(FiX),
  filterOutline: fromIcon(IoFilterOutline),
  edit: fromIcon(FiEdit),
  pencil: fromIcon(FiEdit3),
  users: fromIcon(FiUsers),
  user: fromIcon(FiUser),
  trash: fromIcon(FiTrash),
  rocket: fromIcon(LuRocket),
  plus: fromIcon(FiPlus),
  server: fromIcon(FiServer),
  smile: fromIcon(FiSmile),
  link: fromIcon(FiExternalLink),
  url: fromIcon(FiLink),
  copy: fromIcon(FiCopy),
  type: fromIcon(FiType),
  play: fromIcon(FiPlayCircle),
  phone: fromIcon(FiPhone),
  video: fromIcon(FiVideo),
  briefcase: fromIcon(FiBriefcase),
  barchart: fromIcon(RxBarChart),
  carousel: fromIcon(BiSolidCarousel),
  activity: fromIcon(FiActivity),
  crosshair: fromIcon(FiCrosshair),
  checkFilled: fromIcon(BsCheckSquareFill),
  cardstack: fromIcon(RxCardStack),
  compass: fromIcon(FiCompass),
  creditcard: fromIcon(FiCreditCard),
  maximize: fromIcon(FiMaximize2),
  clock: fromIcon(FiClock),
  chevronDown: fromIcon(FiChevronDown),
  doubleChevron: fromIcon(BsChevronExpand),
  twitterFilledSmall: fromIcon(TbBrandTwitterFilled),
  linkedinText: fromIcon(BiLogoLinkedin),
  plusCircle: fromIcon(FiPlusCircle),
  image: fromIcon(FiImage),
  reddit: fromIcon(BsReddit),
  move: fromIcon(FiMove),
  mix: fromIcon(RxMix),
  mapPin: fromIcon(FiMapPin),
  map: fromIcon(FiMap),
  maximize2: fromIcon(FiMaximize),
  message: fromIcon(FiMessageSquare),
  message2: fromIcon(FiMessageCircle),
  lightbulb: fromIcon(IoBulbOutline),
  sun: fromIcon(FiSun),
  help: fromIcon(FiHelpCircle),
  chevronLeft: fromIcon(FiChevronLeft),
  chevronRight: fromIcon(FiChevronRight),
  pocket: fromIcon(FiPocket),
  fileText: fromIcon(FiFileText),
  watch: fromIcon(FiWatch),
  userCheck: fromIcon(FiUserCheck),
  checkmarkCircle: fromIcon(IoCheckmarkCircle),
  octagon: fromIcon(XOctagon),
  group: fromIcon(RxGroup),
  barchart2: fromIcon(FiBarChart2),
  heart: fromIcon(FiHeart),
  repeat: fromIcon(LuRepeat2),
  bookmark: fromIcon(FiBookmark),
  quote: fromIcon(RxQuote),
  userCircle: fromIcon(LucideUserCircle2),
  database: fromIcon(FiDatabase),
  questionMark: fromIcon(RxQuestionMark),
  arrowRightToLine: fromIcon(LucideArrowRightToLine),
  arrowLeftToLine: fromIcon(LucideArrowLeftToLine),
  moreHorizontal: fromIcon(FiMoreHorizontal),
  moreVertical: fromIcon(FiMoreVertical),
  publish: fromIcon(MdPublishedWithChanges),
  checkCircle: fromIcon(FiCheckCircle),
  arrowUp: fromIcon(ArrowUp),
  fiArrowUp: fromIcon(FiArrowUp),
  arrowDown: fromIcon(FiArrowDown),
  arrowRight: fromIcon(FiArrowRight),
  arrowLeft: fromIcon(FiArrowLeft),
  delete: fromIcon(FiDelete),
  comment: fromIcon(LuMessagesSquare),
  file: fromIcon(FiFile),

  bold: fromIcon(FiBold),
  italic: fromIcon(FiItalic),
  underline: fromIcon(FiUnderline),
  strikethrough: fromIcon(StrikethroughIcon),
  code: fromIcon(CodeIcon),
  hyperlink: fromIcon(LinkIcon),
  leftalign: fromIcon(AlignLeftIcon),
  rightalign: fromIcon(AlignRightIcon),
  centeralign: fromIcon(AlignCenterIcon),
  justifyalign: fromIcon(AlignJustifyIcon),
  undo: fromIcon(Undo2Icon),
  redo: fromIcon(Redo2Icon),
  font: fromIcon(BiFont),
  spacing: fromIcon(CgFontSpacing),

  piechart: fromIcon(PieChart),
  list: fromIcon(List),
  sliders: fromIcon(Sliders),
  dividervertical: fromIcon(RxDividerVertical),
  backpack: fromIcon(RxBackpack),
  mail: fromIcon(Mail),
  tool: fromIcon(FiTool),
  return: fromIcon(CornerDownRight),
  stopCircle: fromIcon(StopCircle),
  view: fromIcon(Eye),
  removeCircle: fromIcon(IoRemoveCircleOutline),
  gear: fromIcon(BsGear),
});
