
# ngx-commento ![](https://i.imgur.com/3vqHl8O.png)


### About
**ngx-commento is an angular 2+ wrapper for [commento.io](https://commento.io/).**

Commento is a discussion platform that you can embed on your blog, news articles, and any place where you want your readers to add comments. Commento is fast, lightweight, and privacy-focused; we'll never sell your data, show ads, embed third-party tracking scripts, or inject affiliate links. Features Privacy-focused Super lightweight, allowing for fast pageloads Automatic spam filtering Review and approve or delete comments through the moderation interface Modern interface with a clean design OAuth support (Google login, for example) Custom CSS theming Import from existing services (like Disqus) Completely free and open source (MIT Expat license)

#### Features

*   Easy to configure
*   Privacy-focused
*   Super lightweight, allowing for fast pageloads
*   Automatic spam filtering
*   Review and approve or delete comments through the moderation interface
*   Modern interface with a clean design
*   OAuth support (Google login, for example)
*   Custom CSS theming
*   Import from existing services (like Disqus)
*   Completely free and open source (MIT Expat license)

### Installation

Firstly

```
npm i --save ngx-commento
```

Copy this HTML code and **paste it in `<head>`** section of your `index.html`.

```javascript
<script src="https://cdn.commento.io/js/commento.js" data-auto-init="false" async />
```

Import `NgxCommentoModule`.

```typescript
import { NgxCommentoModule } from 'ngx-commento';

@NgModule({
    declarations: [
    AppComponent
    ],
    imports: [
    BrowserModule,
    NgxCommentoModule //<-- import this
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

In your component simply add

```HTML
<ngx-commento></ngx-commento>
```

Voila! All your settings, themes, and comments would be automagically loaded. Commento is mobile-responsive too, as it simply fills the container it is put in.
