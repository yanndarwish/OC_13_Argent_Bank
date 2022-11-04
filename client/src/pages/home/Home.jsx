import Hero from "../../components/Hero/Hero"
import FeatureItem from "../../components/Feature-Item/Feature-Item"
import chat from '../../assets/img/icon-chat.png'
import money from '../../assets/img/icon-money.png'
import security from '../../assets/img/icon-security.png'

const Home = () => {
	const features = [
		{
			title: "You are our #1 priority",
			icon: chat,
			text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
		},
		{
			title: "More savings means higher rates",
			icon: money,
			text: "The more you save with us, the higher your interest rate will be!",
		},
		{
			title: "Security you can trust",
			icon: security,
			text: " We use top of the line encryption to make sure your data and money is always safe.",
		},
	]

	return (
		<main>
			<Hero />
			<section className="features">
				<h2 className="sr-only">Features</h2>
				{features.map((feature,i) => (
					<FeatureItem key={i} feature={feature} />
				))}
			</section>
		</main>
	)
}

export default Home
