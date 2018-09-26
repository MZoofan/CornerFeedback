import * as builder from "botbuilder";
import { TriggerActionDialog } from "../../../utils/TriggerActionDialog";
import { DialogIds } from "../../../utils/DialogIds";
import { DialogMatches } from "../../../utils/DialogMatches";
import { Strings } from "../../../locale/locale";

export class HelloDialog extends TriggerActionDialog {

    private static async step1(session: builder.Session, args?: any | builder.IDialogResult<any>, next?: (args?: builder.IDialogResult<any>) => void): Promise<void> {
      console.log(session);  
      
      let name = session.message.address.user.name;
      var fs = require('fs');
                fs.writeFile("sessionInfo.txt", session.userData, function(err) {
                    if (err) {
                        console.log(err);
                    }
                });
      
      session.send("Points added by: " + name);
        session.endDialog();
    }

  
    constructor(
        bot: builder.UniversalBot,
    ) {
        super(bot,
            DialogIds.HelloDialogId,
            [
                DialogMatches.HelloDialogMatch,
                DialogMatches.HelloDialogMatch2,
            ],
            HelloDialog.step1,
        );
    }
}
