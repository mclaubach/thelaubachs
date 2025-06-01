# thelaubachs.com

a simple indie-style family domain landing page

## features
- minimalist black background with seasonal text colors
- scratchy handwritten font (kalam)
- bug-run.png as sidebar image
- links to family sites
- responsive design

## if you already have a github pages site

you have several options:

### option 1: replace your existing site
- if you want thelaubachs.com to replace your current github pages site
- follow the deployment instructions below but use your existing repository
- your current site will be replaced with this one

### option 2: use a project page
- create a new repository named `thelaubachs` 
- push this code to that repository
- enable github pages from that repository's settings
- it will be available at `YOUR_USERNAME.github.io/thelaubachs`
- you can still point thelaubachs.com to it using cname

### option 3: use github pages with multiple domains
- you can have multiple custom domains pointing to different github pages
- your user site (YOUR_USERNAME.github.io) can have one domain
- project sites can have their own domains
- just make sure each repository has its own cname file

### option 4: use a different github account
- create a new github account specifically for this site
- this keeps it completely separate from your existing projects

## deployment to github pages

1. create a new repository on github named `thelaubachs` (or your preferred name)

2. push this code to your repository:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/thelaubachs.git
   git push -u origin main
   ```

3. enable github pages:
   - go to your repository settings
   - scroll to "pages" section
   - under "source", select "deploy from a branch"
   - choose "main" branch and "/ (root)" folder
   - click save

4. configure custom domain (optional):
   - in the same pages settings, add `thelaubachs.com` as custom domain
   - create a CNAME file in your repository with just `thelaubachs.com` inside
   - update your domain's DNS settings to point to github pages

## namecheap dns configuration

1. log into your namecheap account
2. go to domain list and click "manage" next to thelaubachs.com
3. navigate to "advanced dns" tab
4. delete any existing A records or CNAME records for @ and www
5. add the following dns records:

   **for apex domain (thelaubachs.com):**
   - type: A record
   - host: @
   - value: 185.199.108.153
   - ttl: automatic
   
   - type: A record
   - host: @
   - value: 185.199.109.153
   - ttl: automatic
   
   - type: A record
   - host: @
   - value: 185.199.110.153
   - ttl: automatic
   
   - type: A record
   - host: @
   - value: 185.199.111.153
   - ttl: automatic

   **for www subdomain (optional):**
   - type: CNAME record
   - host: www
   - value: YOUR_USERNAME.github.io
   - ttl: automatic

6. save all changes
7. dns propagation can take up to 24 hours, but usually happens within 1-2 hours

## verifying setup

1. wait for dns to propagate (check with: https://www.whatsmydns.net/)
2. in github pages settings, the custom domain should show a green checkmark
3. enable "enforce https" once the domain is verified
4. your site should be live at https://thelaubachs.com

## seasonal colors
- winter (dec-feb): light blue
- spring (mar-may): light green  
- summer (jun-aug): light tan
- autumn (sep-nov): light orange

colors change automatically based on the visitor's current month 