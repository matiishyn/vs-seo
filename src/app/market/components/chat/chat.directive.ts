import {Directive, AfterViewInit} from '@angular/core';
import {isBrowser} from 'angular2-universal';
import {AppSettingsService} from "../../services/appSettings.service";


@Directive({
  selector: '[chat]',
})
export class ChatDirective implements AfterViewInit {

  constructor(private AppSettings: AppSettingsService) {

  }

  ngAfterViewInit() {
    if (isBrowser) {
      this.loadChatWidget();
    }
    this.AppSettings.getIntercomAppId().subscribe(data => {
      const {intercomAppId} = data;
      if (isBrowser) {
        this.connectLead(intercomAppId);
      }
    })
  }

  loadChatWidget() {
    var w: any = window;
    var ic = w.Intercom;

    if (typeof ic === "function") {
      ic('reattach_activator');
      ic('update');
    } else {
      var d = document;
      var i: any = function () {
        i.c(arguments)
      };
    }

    i.q = [];

    i.c = function (args) {
      i.q.push(args)
    };

    w.Intercom = i;

    function l() {
      var s = d.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://widget.intercom.io/widget/';
      var x = d.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }

    if (w.attachEvent) {
      w.attachEvent('onload', l);
    } else {
      w.addEventListener('load', l, false);
    }
  }

  connectLead(appId) {
    var w: any = window;
    w.Intercom('boot', {
      app_id: appId,
      custom_launcher_selector: '#chat',
      hide_default_launcher: true
    });
  }
}
