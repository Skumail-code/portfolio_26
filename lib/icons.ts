import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Briefcase,
  Building2,
  Calculator,
  Calendar,
  ChevronRight,
  Clock,
  Code2,
  CreditCard,
  Database,
  FileDown,
  FileText,
  GitBranch,
  GraduationCap,
  HardDrive,
  IndianRupee,
  Layers,
  Mail,
  MapPin,
  Network,
  Server,
  Share2,
  Terminal,
  User,
  Users,
} from "lucide-react";

export const navIcons: Record<string, LucideIcon> = {
  About: User,
  Experience: Briefcase,
  Formation: GraduationCap,
  Systems: Server,
  Architecture: Network,
  Blog: BookOpen,
  Contact: Mail,
};

export const metricIcons: Record<string, LucideIcon> = {
  UPTIME_EXPERIENCE: Clock,
  SYSTEMS_DEPLOYED: Server,
  PRIMARY_RUNTIME: Code2,
  DATA_STORE: Database,
  SECONDARY_STORE: HardDrive,
  NODE_LOCATION: MapPin,
};

export const systemDomainIcons: Record<string, LucideIcon> = {
  "Real Estate": Building2,
  Payments: CreditCard,
  Accounting: Calculator,
  "Society Management": Users,
};

export const tickerIcons = [Activity, Server, IndianRupee, Clock] as const;

export const architectureCardIcons = [Layers, Database, AlertTriangle] as const;

export const contactIcons: Record<string, LucideIcon> = {
  GitHub: GitBranch,
  LinkedIn: Share2,
  Email: Mail,
};

export {
  Activity,
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  FileDown,
  FileText,
  GraduationCap,
  Terminal,
};
