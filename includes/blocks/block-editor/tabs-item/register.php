<?php
/**
 * Gutenberg Blocks setup
 *
 * @package PublisherMediaKit\Blocks\TabsItem
 */

namespace PublisherMediaKit\Blocks\TabsItem;

/**
 * Register the block
 */
function register() {
	$n = function( $function ) {
		return __NAMESPACE__ . "\\$function";
	};

	if ( function_exists( 'register_block_type_from_metadata' ) ) {
		register_block_type_from_metadata(
			PUBLISHER_MEDIA_KIT_BLOCKS_PATH . '/tabs-item', // this is the directory where the block.json is found.
			[
				'render_callback' => $n( 'render_tabs_item_block_callback' ),
			]
		);
	}

	// Enqueue assets.
	add_action( 'enqueue_block_assets', $n( 'enqueue_block_assets' ) );
}

/**
 * Enqueue block assets.
 */
function enqueue_block_assets() {
	$asset_file = include PUBLISHER_MEDIA_KIT_PATH . 'dist/blocks/tabs-item-block.asset.php';

	wp_enqueue_script(
		'publisher-media-kit-tabs-item-block',
		PUBLISHER_MEDIA_KIT_URL . '/dist/blocks/tabs-item-block.js',
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);
}

/**
 * Render callback method for the block
 *
 * @param array  $attributes The blocks attributes
 * @param string $content    Data returned from InnerBlocks.Content
 * @param array  $block      Block information such as context.
 *
 * @return string The rendered block markup.
 */
function render_tabs_item_block_callback( $attributes, $content, $block ) {

	$template_locations = [
		'partials/blocks/tabs-item/markup.php',
		'templates/partials/blocks/tabs-item/markup.php',
	];
	ob_start();
	// Look for a template in the theme.
	if ( ! locate_template(
		$template_locations,
		true,
		false,
		[
			'attributes' => $attributes,
			'content'    => $content,
			'block'      => $block,
		]
	) ) {
		// require the default template.
		if ( file_exists( PUBLISHER_MEDIA_KIT_BLOCKS_PATH . '/tabs-item/markup.php' ) ) {
			require PUBLISHER_MEDIA_KIT_BLOCKS_PATH . '/tabs-item/markup.php';
		}
	}
	return ob_get_clean();
}
