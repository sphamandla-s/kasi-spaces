import { PROPERTY_TYPE_dummy_data } from "@/constants";
import { Bath, Bed, Square } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PropertyCardProps = typeof PROPERTY_TYPE_dummy_data[0];

function PropertyCard({
    price,
    description,
    property_type,
    location,
    size,
    bedrooms,
    bathrooms,
}: PropertyCardProps) {
    return (
        <Link href="/">
            <div className="border rounded-md overflow-hidden group">
                <div className="aspect-video ">
                    <Image
                        src="/joshua-kettle-skjXoaPJVRo-unsplash.jpg"
                        alt="property image"
                        height={420}
                        width={400}
                        className="w-full group transition-transform group-hover:scale-105 !important"
                    />
                </div>
                <div className="p-6 space-y-6">
                    <p className="text-lg font-semibold">{location}</p>
                    <div className="grid grid-cols-3 items-center divide-x border-y border-border/50">
                        <p className="py-2 flex items-center gap-2 justify-center">
                            {size && <Square className="w-4 h-4" />}
                            {size}
                        </p>
                        <p className="py-2 flex items-center gap-2 justify-center">
                            <Bed className="w-4 h-4" />
                            {bedrooms}
                        </p>
                        <p className="py-2 flex items-center gap-2 justify-center">
                            <Bath className="w-4 h-4" />
                            {bathrooms}
                        </p>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <p className="text-muted-foreground">Price</p>
                            <p className="font-semibold">R{price}</p>
                        </div>
                        <div>
                            <p className="text-muted-foreground">{property_type}</p>
                        </div>
                    </div>
                    <p className="text-gray-600 hover:text-gray-800">{description}</p>
                </div>
            </div>
        </Link>
    );
}

export default PropertyCard;
