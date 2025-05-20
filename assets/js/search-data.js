// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-replacing-google-photos-with-immich-on-a-raspberry-pi",
        
          title: 'Replacing Google Photos with Immich on a Raspberry Pi <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Google Photos has long been my the go-to platform for storing and organizing our cherished memories, with my 200GB plan nearly full&amp;#x2026;Continue reading on Dev Genius »",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.devgenius.io/replacing-google-photos-with-immich-on-a-raspberry-pi-cf05d244149d?source=rss-eceaca31db9a------2", "_blank");
          
        },
      },{id: "post-manage-vault-secrets-with-terraform",
        
          title: 'Manage Vault Secrets with Terraform <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Combining these two tools can streamline management processes and speed up secret provisioningContinue reading on Dev Genius »",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.devgenius.io/manage-vault-secrets-with-terraform-d76f111fda18?source=rss-eceaca31db9a------2", "_blank");
          
        },
      },{id: "post-kubernetes-on-proxmox-with-terraform",
        
          title: 'Kubernetes on Proxmox with Terraform <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Proxmox provides a reliable and flexible virtualization solution for running and managing virtual machines (VMs) and containers. This&amp;#x2026;Continue reading on Dev Genius »",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.devgenius.io/kubernetes-on-proxmox-with-terraform-6880921af6e4?source=rss-eceaca31db9a------2", "_blank");
          
        },
      },{id: "post-monitor-your-workouts-in-grafana",
        
          title: 'Monitor your workouts in Grafana <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://guyzsarun.medium.com/monitor-your-workouts-in-grafana-303ba50a1da3?source=rss-eceaca31db9a------2", "_blank");
          
        },
      },{id: "post-organize-your-infra-with-terraform-module",
        
          title: 'Organize your Infra with Terraform Module <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Terraform, allows developers and DevOps engineer to define their infrastructure in a declarative way or Infrastructure as Code ( IaC ). A&amp;#x2026;Continue reading on Dev Genius »",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.devgenius.io/organize-your-infra-with-terraform-module-3cdc315a6178?source=rss-eceaca31db9a------2", "_blank");
          
        },
      },{id: "post-automate-your-proxmox-with-packer",
        
          title: 'Automate your Proxmox with Packer <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Proxmox Virtual Environment (PVE) is an open-source platform for virtualization ( KVM ) and container deployment ( Linux LXC )Continue reading on Dev Genius »",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.devgenius.io/automate-your-proxmox-with-packer-dff95222cfe8?source=rss-eceaca31db9a------2", "_blank");
          
        },
      },{id: "post-crontab-but-kubernetes",
        
          title: 'Crontab but Kubernetes <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Crontab is a Linux utility to schedule commands or scripts to run automatically at specified intervals. It is an essential tool for&amp;#x2026;Continue reading on Dev Genius »",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.devgenius.io/crontab-but-kubernetes-a8e3bdb89bcc?source=rss-eceaca31db9a------2", "_blank");
          
        },
      },{id: "post-การสร้าง-root-httpproxy-บน-contour",
        
          title: 'การสร้าง Root HTTPProxy บน Contour <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "&amp;#xE40;&amp;#xE23;&amp;#xE32;&amp;#xE08;&amp;#xE30;&amp;#xE21;&amp;#xE32;&amp;#xE14;&amp;#xE39;&amp;#xE27;&amp;#xE34;&amp;#xE18;&amp;#xE35;&amp;#xE01;&amp;#xE32;&amp;#xE23;&amp;#xE2A;&amp;#xE23;&amp;#xE49;&amp;#xE32;&amp;#xE07; root HTTPProxy &amp;#xE40;&amp;#xE1E;&amp;#xE37;&amp;#xE48;&amp;#xE2D;&amp;#xE41;&amp;#xE01;&amp;#xE49;&amp;#xE1B;&amp;#xE31;&amp;#xE0D;&amp;#xE2B;&amp;#xE32; Config Ingress &amp;#xE0A;&amp;#xE19;&amp;#xE01;&amp;#xE31;&amp;#xE19;&amp;#xE1A;&amp;#xE19; Cluster &amp;#xE40;&amp;#xE27;&amp;#xE25;&amp;#xE32;&amp;#xE2B;&amp;#xE25;&amp;#xE32;&amp;#xE22;&amp;#xE46;&amp;#xE17;&amp;#xE35;&amp;#xE21;&amp;#xE21;&amp;#xE35;&amp;#xE01;&amp;#xE32;&amp;#xE23;&amp;#xE43;&amp;#xE0A;&amp;#xE49; FQDN &amp;#xE40;&amp;#xE14;&amp;#xE35;&amp;#xE22;&amp;#xE27;&amp;#xE01;&amp;#xE31;&amp;#xE19;.Continue reading on Medium »",
        section: "Posts",
        handler: () => {
          
            window.open("https://guyzsarun.medium.com/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-root-httpproxy-%E0%B8%9A%E0%B8%99-contour-4e820440c1a6?source=rss-eceaca31db9a------2", "_blank");
          
        },
      },{id: "post-monitor-snmp-ด้วย-cloudproxy-vrops",
        
          title: 'Monitor SNMP ด้วย CloudProxy-vROps <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://guyzsarun.medium.com/monitor-snmp-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-cloudproxy-vrops-8177fd9da253?source=rss-eceaca31db9a------2", "_blank");
          
        },
      },{id: "post-don-t-repeat-yourself-with-yaml-anchor",
        
          title: 'Don’t Repeat Yourself with YAML anchor <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Continue reading on Dev Genius »",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.devgenius.io/dont-repeat-yourself-with-yaml-anchor-29180b6f6313?source=rss-eceaca31db9a------2", "_blank");
          
        },
      },{id: "projects-homelab",
          title: 'HomeLab',
          description: "homelab project hosted on Intel NUC",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_homelab/";
            },},{id: "projects-vmware-tanzu-gemfire-poc",
          title: 'VMware Tanzu Gemfire POC',
          description: "a sample project to demonstrate the use of VMware Tanzu Gemfire on k8s",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_gemfire-poc/";
            },},{id: "projects-ytt-template-springboot",
          title: 'ytt template springboot',
          description: "a demo project using ytt to template springboot configuration",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_ytt/";
            },},{id: "projects-cms-xrootd-tfc-module",
          title: 'CMS XRootD TFC Module',
          description: "CERN CMS Experiment storage.json conversion using XRootD Name2Name interface",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_xrootd-tfc/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/guyzsarun", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/sarun-nun", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@guyzsarun", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
