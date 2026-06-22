import type { Metadata } from "next";
import CollectionGrid from "@/components/CollectionGrid";
import { pieces, categories } from "@/lib/data";

export const metadata: Metadata = {
  title: "The Collection · Karu",
  description:
    "Browse the curated gallery of handcrafted Indian art: clay, terracotta, and folk sculpture, each piece verified and singular.",
};

export default function CollectionPage() {
  return (
    <>
      <section className="page-head">
        <div className="shell">
          <p className="eyebrow">The Collection</p>
          <h1 className="display-lg">A curated gallery of the handmade</h1>
          <p className="lead page-head__lead">
            Nothing here is mass-produced. Every work is selected by hand, made by
            a named artisan, and accompanied by its full story and provenance.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="shell">
          <CollectionGrid pieces={pieces} categories={categories} />
        </div>
      </section>
    </>
  );
}
