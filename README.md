# CAPSLOCK

CAPSLOCK is a simple hugo theme for blog-like websites. It allows for good flexibility, and supports a few archetypes
out of the box such as gists.

### Features

![Example Picture](image.png)

- Draft Indicator
- Flexibility
- Tags and Categories
- Gist Archetype
- Customizable fore and background colors.

### Getting Started

To get started, you can clone the repo.

    git clone https://github.com/arlyon/CAPSLOCK.git themes/CAPSLOCK
    
or 

    git submodule add https://github.com/taikii/whiteplain.git themes/whiteplain
    
Then, edit your configuration file to set `CAPSLOCK` as the theme.

    ...
    
    theme = "CAPSLOCK"
    
    # optional but recommended
    sectionPagesMenu = "main"
    pygmentsCodeFences = true
    pygmentsOptions="linenos=inline"
    pygmentsStyle="bw"
    
    ...
  
Finally, you can explore some of the achetypes and get started.

### Supported Archetypes

#### Gists

To create gists you can use the command `hugo new gists/code.md` and a new post of the
gist archetype will be created. After that, simply edit the user and gist ids and the
gist in question will be rendered onto the page.

#### Projects

To create a "project" you simply need to run the command `hugo new projects/mine.md` and
the project archetype will be used. In the project archetype there is a demo and source
field in the front matter that will appear on the page as a button.

### Some Tips

- To set the "blurb" for each section, create an `_index.md` file in either the content root
or one of the archetype folder. It will be included in the "list" view for that archetype.

- To customize the color scheme you can create a `custom.css` file and set some CSS variables in it.
This will override the default black and white color scheme with the colors you define.
        
      :root {
          --foreground: orange;
          --foreground-08: rgba(255,165,0, 0.8);
          --foreground-03: rgba(255,165,0, 0.3);
          --foreground-01: rgba(255,165,0, 0.1);
          --foreground-005: rgba(255,165,0, 0.05);
        
          --background: black;
      }