/* eslint-disable @typescript-eslint/no-explicit-any */
export const articleIntroPlugin = {
  // @Required @Unique
  // plugin name
  name: "articleIntro",
  // @Required
  // data display
  display: "command",

  // @Options
  title: "Add article intro",
  buttonClass: "",
  innerHTML: "♣",

  // @Required
  // add function - It is called only once when the plugin is first run.
  // This function generates HTML to append and register the event.
  // arguments - (core : core object, targetElement : clicked button element)
  add: function (core: any, targetElement: any) {
    const context = core.context;
    const rangeTag = core.util.createElement("div");
    core.util.addClass(rangeTag, "article__intro__wrapper");

    // @Required
    // Registering a namespace for caching as a plugin name in the context object
    context.articleIntro = {
      targetButton: targetElement,
      tag: rangeTag,
    };
  },

  // @Override core
  // Plugins with active methods load immediately when the editor loads.
  // Called each time the selection is moved.
  active: function (element: any) {
    if (!element) {
      (this as any).util.removeClass(
        (this as any).context.articleIntro.targetButton,
        "active"
      );
    } else if (
      (this as any).util.hasClass(element, "article__intro__wrapper")
    ) {
      (this as any).util.addClass(
        (this as any).context.articleIntro.targetButton,
        "active"
      );
      return true;
    }

    return false;
  },

  // @Required, @Override core
  // The behavior of the "command plugin" must be defined in the "action" method.
  action: function () {
    const rangeTag = (this as any).util.getRangeFormatElement(
      (this as any).getSelectionNode()
    );

    if ((this as any).util.hasClass(rangeTag, "article__intro__wrapper")) {
      (this as any).detachRangeFormatElement(
        rangeTag,
        null,
        null,
        false,
        false
      );
    } else {
      (this as any).applyRangeFormatElement(
        (this as any).context.articleIntro.tag.cloneNode(false)
      );
    }
  },
};
