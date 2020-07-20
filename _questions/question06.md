---
title: What are the major communities interacting with brands?

cover: /assets/images/covers/viz02.jpg

number: 6

intro: Knowing the types of users surrounding an online entity could be an interesting insight for a brand itself, given that this information could be useful in order to mold the online contents according to the audience who interact with them. With this analysis we tried to dig into the problem of community detection, studying at a first stage some quantitative numbers such as followers count, followings count and medias count, and then focusing on textual data, such as users’ biography, which lead to a more interesting result.

sources:
  - name: Wikipedia
    link: https://www.wikipedia.org/
    timestamp: 28/10/2019
  - name: Google News
    link: https://google.com
    timestamp: 22/10/2019
---

### Main Findings
There are three main communities both for Milan and for New York, and both of them seem to recall almost the same type of users. For New York Fashion Week the share of communities among brands is more or less constant, while for Milano Fashion Week the share of communities is very different from brand to brand, as shown in the image below.

![example of secondary visualization]({{ '/assets/images/findings/marimekko_different_share.png' | relative_url }})

***

Related to MIFW it is possible to notice that there are some brands, like marni, jilsander or marcodevincenzo, for which the cluster of users related to fashion (i.e. cluster 1) is dominant.

![example of secondary visualization]({{ '/assets/images/findings/marimekko_marni_jil_marco.png' | relative_url }})

***

On the other hand, always for MIFW, there are brands which show to be more surrounded by users belonging to cluster 0 (i.e. users which seem to be italian students) or cluster 2 (i.e. users which seem to be international).

![example of secondary visualization]({{ '/assets/images/findings/marimekko_cl0_cl2.png' | relative_url }})

***

Concerning NYFW, it is possible to notice that for every brand the majority of users belongs to cluster 0 (i.e. users related to the fashion world), then there is a share related to international users (i.e. cluster 2) which has almost the same size for each brand. Finally, there is the presence of users belonging to the business-world cluster, which size is variable for each brand.

![example of secondary visualization]({{ '/assets/images/findings/marimekko_cl0_fashion.png' | relative_url }})

### Protocol

![example of protocol]({{ '/assets/images/protocols/community_detection.svg' | relative_url }})
