

const ImpactCalculator = () => {
    document.title = 'Impact Calculator | Scrapbag';
    return (
        <div>
            <section className="mt-24">
                <iframe height="640" id="ghg_equivalencies" scrolling="no" src="https://www.epa.gov/sites/production/files/widgets/ghg_widget/widget.html" title="Greenhouse Gas Equivalencies Calculator"></iframe>
            </section>
        </div>
    )
}

export default ImpactCalculator
