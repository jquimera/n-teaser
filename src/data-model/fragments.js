module.exports = {
	liveBlog: `
		fragment LiveBlogInfo on LiveBlog {
			status
			updates(limit: 1) {
				date
				text
			}
		}
	`,
	teaserExtraLight: `
		fragment TeaserExtraLight on Content {
			type: __typename
			id
			isPremium
			relativeUrl
			title
			promotionalTitle
			publishedDate
			initialPublishedDate
			isEditorsChoice
			canBeSyndicated
			genreTag(only: ["MQ==-R2VucmVz", "Mw==-R2VucmVz", "OQ==-R2VucmVz", "NA==-R2VucmVz", "MTA=-R2VucmVz"]) {
				prefLabel
			}
			primaryBrandTag {
				prefLabel
				relativeUrl
				taxonomy
				attributes(only: ["headshot"]) {
					key
					value
				}
				idV1
			}
			authorTags(limit: 1) {
				prefLabel
				relativeUrl
				attributes(only: ["headshot"]) {
					key
					value
				}
				idV1
			}
			isOpinion
		}
	`,
	teaserLight: `
		fragment TeaserLight on Content {
			id
			teaserTag {
				prefLabel
				relativeUrl
			}
			primaryTag {
				prefLabel
				relativeUrl
			}
			...on Video {
				duration
				formattedDuration(format: "m:ss")
			}
		}
	`,
	teaserLifestyle: `
		fragment TeaserLifestyle on Content {
			mainImage {
				title
				description
				url
				width
				height
				ratio
			}
		}
	`,
	teaserStandard: `
		fragment TeaserStandard on Content {
			standfirst
		}
	`,
	teaserHeavy: `
		fragment TeaserHeavy on Content {
			containedIn(limit: 1) {
				title
				...on Package {
					design {
						theme
					}
				}
				primaryBrandTag {
					prefLabel
					relativeUrl
				}
			}
			mainImage {
				title
				description
				url
				width
				height
				ratio
			}
		}
	`,
	teaserTopStory: `
		fragment TeaserTopStory on Content {
			storyPackage(limit: 3) {
				type: __typename
				relativeUrl
				isPremium
				title
				promotionalTitle
			}
			primaryTag {
				latestContent(limit: 4) {
					type: __typename
					relativeUrl
					isPremium
					title
					promotionalTitle
					id
				}
			}
		}
	`,
	packageTeaser: `
		fragment PackageTeaser on Package {
			design {
				theme
			}
		}
	`,
	packageTeaserList: `
		fragment PackageTeaserList on Package {
			contains(limit: 3) {
				title
				promotionalTitle
				relativeUrl
			}
		}
	`
};
