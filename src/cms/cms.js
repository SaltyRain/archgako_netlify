import CMS from "netlify-cms";

import FooterPreview from "./preview-templates/FooterPreview";
import ProjectPreview from "./preview-templates/ProjectPreview";
import HomePagePreview from "./preview-templates/HomePagePreview";

CMS.registerPreviewTemplate("footer", FooterPreview);
CMS.registerPreviewTemplate("project", ProjectPreview);
CMS.registerPreviewTemplate("home", HomePagePreview);