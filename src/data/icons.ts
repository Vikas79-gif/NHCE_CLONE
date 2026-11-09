// Icon component mapping for dynamic rendering
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Eye,
  Camera,
  TreePine,
  Award,
  BookOpen,
  Users,
  CheckCircle,
  GraduationCap,
  Clock,
  Building2,
  Globe,
  Lightbulb,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Mail,
  Phone,
  MapPin,
  Eye,
  Camera,
  TreePine,
  Award,
  BookOpen,
  Users,
  CheckCircle,
  GraduationCap,
  Clock,
  Building2,
  Globe,
  Lightbulb,
  Target,
  TrendingUp,
};

export function getIcon(iconName: string, className: string = ""): React.JSX.Element | null {
  const Comp = iconMap[iconName];
  if (!Comp) return null;
  return React.createElement(Comp, { className });
}