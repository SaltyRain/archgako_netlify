import CMS from "netlify-cms";

import FooterPreview from "./preview-templates/FooterPreview";
import ProjectPreview from "./preview-templates/ProjectPreview";

CMS.registerPreviewTemplate("footer", FooterPreview);
CMS.registerPreviewTemplate("project", ProjectPreview);