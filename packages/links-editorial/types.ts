import { Package, Action } from "frontity/types";
import { AutoPrefetch } from "@frontity/components/link/types";
import Html2React from "@frontity/html2react/types";

/**
 * LINKS Web Editorial Theme
 */
interface EditorialTheme extends Package {
  /**
   * The name of this package.
   */
  name: "links-editorial";

  /**
   * Root components exposed by this package.
   */
  roots: {
    /**
     * In Frontity, any package can add React components to the site.
     * We use roots for that, scoped to the `theme` namespace.
     */
    theme: React.ElementType;
  };

  /**
   * The state exposed by this package.
   */
  state: {
    /**
     * Theme namespace.
     */
    theme: {
      /**
       * The auto prefetch setting. Defined in {@link AutoPrefetch}.
       */
      autoPrefetch: AutoPrefetch;

      /**
       * The menu of the theme. Expresed as an array of arrays that contain the
       * label in the first item and the link in the second.
       */
      menu: [string, string][];
    };
  };

  /**
   * The actions exposed by this package.
   */
  actions: {
    /**
     * The theme namespace.
     */
    theme: {

    };
  };

  /**
   * The libraries exposed by this package.
   */
  libraries: {
    /**
     * The Html2React namespace.
     */
    html2react: {
      /**
       * The Html2React processors.
       */
      processors: Html2React["libraries"]["html2react"]["processors"];
    };
  };
}

export default MarsTheme;
